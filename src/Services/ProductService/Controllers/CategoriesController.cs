using Microsoft.AspNetCore.Mvc;
using Gym_Clothes_ECommerce.Core.Models;
using Gym_Clothes_ECommerce.ProductContext.Data;

namespace Gym_Clothes_ECommerce.ProductService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoriesController : ControllerBase
    {
        private readonly Gym_Clothes_ECommerce.ProductContext.Data.ProductContext _context;

        public CategoriesController(Gym_Clothes_ECommerce.ProductContext.Data.ProductContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetCategories()
        {
            var categories = _context.Categories.ToList();
            return Ok(categories);
        }

        [HttpGet("{id}")]
        public IActionResult GetCategory(int id)
        {
            var category = _context.Categories.Find(id);
            if (category == null)
                return NotFound();
            return Ok(category);
        }

        [HttpPost]
        public IActionResult CreateCategory([FromBody] Category category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetCategory), new { id = category.Id }, category);
        }
    }
}
