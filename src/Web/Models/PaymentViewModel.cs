namespace Gym_Clothes_ECommerce.Web.Models
{
    public class PaymentViewModel
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public decimal Amount { get; set; }
        public string? PaymentMethod { get; set; }
        public DateTime PaymentDate { get; set; }
    }
}
