using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Gym_Clothes_ECommerce.Core.Models
{
    public class Notification
    {
        [Key]
        public int Id { get; set; }

        [Required, MaxLength(250)]
        public string Message { get; set; } = string.Empty;

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public int UserId { get; set; }
    public virtual User? User { get; set; }
    }
}
