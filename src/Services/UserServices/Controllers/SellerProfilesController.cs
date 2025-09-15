using Microsoft.AspNetCore.Mvc;
using Gym_Clothes_ECommerce.Core.Models;
using Gym_Clothes_ECommerce.UserService.Data;

namespace Gym_Clothes_ECommerce.UserServices.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SellerProfilesController : ControllerBase
    {
        private readonly UserContext _context;

        public SellerProfilesController(UserContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetSellerProfiles()
        {
            var sellers = _context.SellerProfiles.ToList();
            return Ok(sellers);
        }

        [HttpGet("{id}")]
        public IActionResult GetSellerProfile(int id)
        {
            var seller = _context.SellerProfiles.Find(id);
            if (seller == null)
                return NotFound();
            return Ok(seller);
        }

        [HttpPost]
        public IActionResult CreateSellerProfile([FromBody] SellerProfile sellerProfile)
        {
            _context.SellerProfiles.Add(sellerProfile);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetSellerProfile), new { id = sellerProfile.Id }, sellerProfile);
        }
    }
}
