using Microsoft.AspNetCore.Mvc;
using Gym_Clothes_ECommerce.Core.Models;
using Gym_Clothes_ECommerce.PaymentContext.Data;

namespace Gym_Clothes_ECommerce.PaymentService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PaymentsController : ControllerBase
    {
        private readonly Gym_Clothes_ECommerce.PaymentContext.Data.PaymentContext _context;

        public PaymentsController(Gym_Clothes_ECommerce.PaymentContext.Data.PaymentContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetPayments()
        {
            var payments = _context.Payments.ToList();
            return Ok(payments);
        }

        [HttpGet("{id}")]
        public IActionResult GetPayment(int id)
        {
            var payment = _context.Payments.Find(id);
            if (payment == null)
                return NotFound();
            return Ok(payment);
        }

        [HttpPost]
        public IActionResult CreatePayment([FromBody] Payment payment)
        {
            _context.Payments.Add(payment);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetPayment), new { id = payment.Id }, payment);
        }
    }
}
