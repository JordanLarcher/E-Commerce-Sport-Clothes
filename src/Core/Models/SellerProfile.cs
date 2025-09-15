using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gym_Clothes_ECommerce.Core.Models
{
    public class SellerProfile
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string StoreName { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string StoreDescription { get; set; } = string.Empty;

    public int UserId { get; set; }
    public virtual User? User { get; set; }
    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
    }
}
