using Microsoft.EntityFrameworkCore;
using Gym_Clothes_ECommerce.Core.Models;

namespace Gym_Clothes_ECommerce.NotificationContext.Data
{
    public class NotificationContext : DbContext
    {
        public NotificationContext(DbContextOptions<NotificationContext> options) : base(options) { }

        public DbSet<Notification> Notifications { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships
            modelBuilder.Entity<Notification>()
                .HasOne(n => n.User)
                .WithMany(u => u.Notifications)
                .HasForeignKey(n => n.UserId);

            base.OnModelCreating(modelBuilder);
        }
    }
}