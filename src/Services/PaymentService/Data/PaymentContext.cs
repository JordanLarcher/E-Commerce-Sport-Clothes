using Microsoft.EntityFrameworkCore;
using Gym_Clothes_ECommerce.Core.Models;

namespace Gym_Clothes_ECommerce.PaymentContext.Data
{
    public class PaymentContext : DbContext
    {
        public PaymentContext(DbContextOptions<PaymentContext> options) : base(options) { }

        public DbSet<Payment> Payments { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships
            modelBuilder.Entity<Payment>()
                .HasOne(p => p.Order)
                .WithMany(o => o.Payments)
                .HasForeignKey(p => p.OrderId);

            base.OnModelCreating(modelBuilder);
        }
    }
}