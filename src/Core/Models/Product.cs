using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gym_Clothes_ECommerce.Core.Models
{
    public enum Gender
    {
        Unspecified = 0,
        Male = 1,
        Female = 2,
        Unisex = 3
    }
    public class Product
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(200)]
        public string Name { get; set; } = string.Empty;

        [Required, MaxLength(1000)]
        public string Description { get; set; } = string.Empty;

        [Required, Column(TypeName = "decimal(18,2)")]
        public decimal Price { get; set; }

        [Required]
        public string ImageUrl { get; set; } = string.Empty;

        public Gender Gender { get; set; }

        public int Stock { get; set; }

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public int SellerId { get; set; } // Foreign key to User (Seller)
    public int CategoryId { get; set; } // Foreign key to Category

    [ForeignKey("CategoryId")]
    public virtual Category Category { get; set; } = null!;

    [ForeignKey("SellerId")]
    public virtual SellerProfile SellerProfile { get; set; } = null!;

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
    public virtual ICollection<WishListItem> WishListItems { get; set; } = new List<WishListItem>();
    }
}