using Microsoft.EntityFrameworkCore;
using Gym_Clothes_ECommerce.Core.Models;

namespace Gym_Clothes_ECommerce.UserService.Data
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<SellerProfile> SellerProfiles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure relationships
            modelBuilder.Entity<User>()
                .HasOne(u => u.SellerProfile)
                .WithOne(s => s.User)
                .HasForeignKey<SellerProfile>(s => s.UserId);

            base.OnModelCreating(modelBuilder);
        }
    }
}