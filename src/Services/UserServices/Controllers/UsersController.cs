using Microsoft.AspNetCore.Mvc;
using Gym_Clothes_ECommerce.Core.Models;
using Gym_Clothes_ECommerce.UserService.Data;

namespace Gym_Clothes_ECommerce.UserServices.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly UserContext _context;

        public UsersController(UserContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] RegisterDto dto)
        {
            if (string.IsNullOrWhiteSpace(dto.Name) || string.IsNullOrWhiteSpace(dto.Email) || string.IsNullOrWhiteSpace(dto.Password))
                return BadRequest(new { message = "Todos los campos son obligatorios." });

            // Separar nombre completo en nombre y apellido
            var names = dto.Name.Split(' ', 2);
            var firstName = names.Length > 0 ? names[0] : "";
            var lastName = names.Length > 1 ? names[1] : "";

            // Validar si el email ya existe
            if (_context.Users.Any(u => u.Email == dto.Email))
                return BadRequest(new { message = "El correo ya está registrado." });

            var user = new User
            {
                FirstName = firstName,
                LastName = lastName,
                Email = dto.Email,
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(dto.Password),
                Role = UserRole.Customer,
                Type = UserType.Buyer,
                IsEmailVerified = false
            };
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok(new { message = "Usuario registrado exitosamente." });
        }
    }
}
