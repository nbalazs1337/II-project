using Microsoft.EntityFrameworkCore;
using proiectLaII.Context;
using proiectLaII.Models;

namespace proiectLaII.Repository
{
    public class ProductRepository : GenericRepository<Products>, IProductRepository
    {
        public ProductRepository(StoreContext context) : base(context)
        {

        }
        public async Task<IEnumerable<Products>> GetAllProducts()
        {
            return await _context.Products.Include(x => x.Brand).ToListAsync();
        }

        public async Task<IEnumerable<Brand>> GetAllBrands()
        {
            return await _context.Brands.ToListAsync();
        }

        public async Task<IEnumerable<Products>> GetProductsOfBrands(int brand)
        {
            return await _context.Products.Where(b => b.Brand.id == brand).ToListAsync();
        }


    }
}
