using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using proiectLaII.Models;

namespace proiectLaII.Context
{
    public class StoreContext : DbContext
    {
        private readonly IConfiguration _config;
        public StoreContext(IConfiguration configuration)
        {
            _config = configuration;
        }

        public DbSet<User> Users { get; set; } 
        public DbSet<Basket> Baskets { get; set; }
        public DbSet <Brand> Brands { get; set; }
        public DbSet <Address> Addresses { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Products> Products { get; set; }

        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_config.GetConnectionString("ProiectIIDatabase"));
            }
        }
        
        protected override void OnModelCreating (ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().HasData(new User { UserName = "admin", Password = "admin"});
        }
        
    }
}
