using Azure.Data.Tables;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace BRANE.Func
{
    public class SubscribeFunction
    {
        private readonly ILogger<SubscribeFunction> _logger;

        public SubscribeFunction(ILogger<SubscribeFunction> logger)
        {
            _logger = logger;
        }

        [Function("subscribe")]
        public async Task<IActionResult> RunAsync([HttpTrigger(AuthorizationLevel.Anonymous, "put")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");

            var parameterObjectBody = await req.ReadFromJsonAsync<SubscriptionModel>();
            if (string.IsNullOrEmpty(parameterObjectBody.Email))
            {
                return new BadRequestObjectResult("Please pass a email in the request body");
            }
            // add a row in a table storage
            var storageAccountConnectionString = Environment.GetEnvironmentVariable("AzureWebJobsStorage");
            var serviceClient = new TableServiceClient(storageAccountConnectionString);

            var tableClient = serviceClient.GetTableClient("subs");
            await tableClient.CreateIfNotExistsAsync();

            var subscription = new SubscriptionModel(parameterObjectBody.Email, parameterObjectBody.Subject, parameterObjectBody.Source, parameterObjectBody.Metadata);
            var entity = SubscriptionEntity.CreateEntity(subscription);

            try
            {
                await tableClient.AddEntityAsync(entity);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while adding entity to table storage");
                return new BadRequestObjectResult("Error while adding subscription.");
            }
            

            return new OkObjectResult("Subscribed");
        }
    }
}
