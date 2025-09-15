namespace Gym_Clothes_ECommerce.Web.Models
{
    public class NotificationViewModel
    {
        public int Id { get; set; }
        public string? Message { get; set; }
        public int UserId { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
