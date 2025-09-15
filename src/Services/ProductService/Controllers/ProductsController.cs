using Microsoft.AspNetCore.Mvc;
using Gym_Clothes_ECommerce.Core.Models;
using Gym_Clothes_ECommerce.ProductContext.Data;

namespace Gym_Clothes_ECommerce.ProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly Gym_Clothes_ECommerce.ProductContext.Data.ProductContext _context;

        public ProductsController(Gym_Clothes_ECommerce.ProductContext.Data.ProductContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _context.Products.ToList();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public IActionResult GetProduct(int id)
        {
            var product = _context.Products.Find(id);
            if (product == null)
                return NotFound();
            return Ok(product);
        }

        [HttpPost]
        public IActionResult CreateProduct([FromBody] Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }
    }
}
