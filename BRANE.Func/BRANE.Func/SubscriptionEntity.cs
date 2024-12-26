using Azure;
using Azure.Data.Tables;

namespace BRANE.Func;
public class SubscriptionEntity : ITableEntity
{

    public string PartitionKey { get; set; }
    public string RowKey { get; set; }
    public ETag ETag { get; set; }
    public string Email { get; set; }
    public string Subject { get; set; }
    public string Source { get; set; }
    public string? Metadata { get; set; }
    public DateTimeOffset? Timestamp { get; set; }
    
    public static SubscriptionEntity CreateEntity(SubscriptionModel model)
    {
        var entity = new SubscriptionEntity()
        {
            PartitionKey = model.Email,
            RowKey = model.Source,
            Email = model.Email,
            Subject = model.Subject,
            Source = model.Source,
            Metadata = model.Metadata
        };

        return entity;
    }
}
