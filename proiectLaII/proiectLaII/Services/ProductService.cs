using proiectLaII.Models;
using proiectLaII.Repository;

namespace proiectLaII.Services
{
    public class ProductService : IProductService
    {
        private readonly IProductRepository _productRepository;
        public ProductService(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        public async Task<IEnumerable<Products>> GetAllProducts()
        {
            return await _productRepository.GetAllProducts();
        }
        public async Task<IEnumerable<Brand>> GetAllBrands()
        {
            return await _productRepository.GetAllBrands();
        }
        public async Task<IEnumerable<Products>> GetProductsOfBrands(int brand)
        {
            return await _productRepository.GetProductsOfBrands(brand);
        }
    }
}
