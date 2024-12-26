namespace BRANE.Func;

public class SubscriptionModel
{
    public string Email { get; set; }
    public string Subject { get; set; }
    public string Source { get; set; }
    public string? Metadata { get; set; }
    public SubscriptionModel(string email, string subject, string source, string? metadata)
    {
        Email = email;
        Subject = subject;
        Source = source;
        Metadata = metadata;
    }
}