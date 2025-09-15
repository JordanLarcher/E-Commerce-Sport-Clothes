using Microsoft.EntityFrameworkCore;
using Gym_Clothes_ECommerce.Core.Models;

namespace Gym_Clothes_ECommerce.ProductContext.Data
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options) { }

        public DbSet<Product> Products { get; set; }
        public DbSet<Category> Categories { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships
            modelBuilder.Entity<Product>()
                .HasOne(p => p.Category)
                .WithMany(c => c.Products)
                .HasForeignKey(p => p.CategoryId);
            modelBuilder.Entity<Product>()
                .HasOne(p => p.SellerProfile)
                .WithMany(s => s.Products)
                .HasForeignKey(p => p.SellerId);

            base.OnModelCreating(modelBuilder);
        }
    }
}