using Microsoft.AspNetCore.Mvc;
using proiectLaII.Services;
using System.Collections.Generic;
using proiectLaII.Models;
namespace proiectLaII.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        private readonly IProductService _service;

        public ProductController(IProductService service)
        {
            _service = service;
        }

        [HttpGet("/getProduct")]
        public async Task<IEnumerable<Products>> GetAllProducts()
        {
            return await _service.GetAllProducts();
        }


        [HttpGet("/getBrands")]
        public async Task<IEnumerable<Brand>> GetBrands()
        {
            return await _service.GetAllBrands();
        }

        [HttpGet("/getProducsAfterBrands")]
        public async Task<IEnumerable<Products>> GetProductsFilteredByBrands(int brand)
        {
            return await _service.GetProductsOfBrands(brand);
        }

        [HttpGet("/getBasket")]
        public async Task<IEnumerable<Basket>> GetBasket()
        {
            return await _service.GetBasketItem();
        }

    }
}
