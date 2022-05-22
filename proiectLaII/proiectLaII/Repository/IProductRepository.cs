using proiectLaII.Models;

namespace proiectLaII.Repository
{
    public interface IProductRepository : IGenericRepository<Products>
    {
        Task<IEnumerable<Products>> GetAllProducts();
        Task<IEnumerable<Brand>> GetAllBrands();
        Task<IEnumerable<Products>> GetProductsOfBrands(int brand);
    }
}
