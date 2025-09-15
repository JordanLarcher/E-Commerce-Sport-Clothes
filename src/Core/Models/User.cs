using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gym_Clothes_ECommerce.Core.Models
{
    public enum UserRole { Visitor, Customer, Seller, Admin };
    public enum UserType { Buyer, Seller }

    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(100)]
        public string PasswordHash { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string FirstName { get; set; } = string.Empty;

        [Required, MaxLength(100)]
        public string LastName { get; set; } = string.Empty;

        public UserRole Role { get; set; } = UserRole.Visitor;

        public UserType? Type { get; set; }

        public bool IsEmailVerified { get; set; } = false;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // Navigation Properties 
    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
    public virtual ICollection<WishListItem> WishListItems { get; set; } = new List<WishListItem>();
    public virtual SellerProfile? SellerProfile { get; set; }
    public virtual ICollection<Notification> Notifications { get; set; } = new List<Notification>();
    }
}