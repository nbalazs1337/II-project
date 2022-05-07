using Domains.Entities;
using Microsoft.EntityFrameworkCore;

namespace proiectIIv2.Context
{
    public class ShopContext : DbContext
    {
        public readonly IConfiguration _config;
        public ShopContext(IConfiguration config)
        {
            _config = config;
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        public DbSet<BasketItem> BasketItems { get; set; }
        public DbSet<Order> Orders { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(_config.GetConnectionString("SimpleShopDatabase"));
            }
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductBrand>().HasData(new ProductBrand { Id = 1, Name = "Gucci" });
            modelBuilder.Entity<ProductType>().HasData(new ProductType { Id = 1, Name = "Papuci" });
        }
    }
}
