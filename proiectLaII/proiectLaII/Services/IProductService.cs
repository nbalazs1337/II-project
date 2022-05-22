using proiectLaII.Models;

namespace proiectLaII.Services
{
    public interface IProductService
    {
        Task<IEnumerable<Products>> GetAllProducts();
        Task<IEnumerable<Brand>> GetAllBrands();
        Task<IEnumerable<Products>> GetProductsOfBrands(int brand);
    }
}
