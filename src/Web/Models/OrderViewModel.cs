namespace Gym_Clothes_ECommerce.Web.Models
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal TotalAmount { get; set; }
        public string? Status { get; set; }
        public string? PaymentDetails { get; set; }
        public DateTime OrderDate { get; set; }
    }
}
