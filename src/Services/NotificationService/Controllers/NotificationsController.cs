using Microsoft.AspNetCore.Mvc;
using Gym_Clothes_ECommerce.Core.Models;
using Gym_Clothes_ECommerce.NotificationContext.Data;
// Ensure that NotificationContext is a class in this namespace, not just a namespace.
// If NotificationContext is a namespace, you need to reference the actual DbContext class, e.g.:
namespace Gym_Clothes_ECommerce.NotificationService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotificationsController : ControllerBase
    {
        private readonly Gym_Clothes_ECommerce.NotificationContext.Data.NotificationContext _context;

        public NotificationsController(Gym_Clothes_ECommerce.NotificationContext.Data.NotificationContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetNotifications()
        {
            var notifications = _context.Notifications.ToList();
            return Ok(notifications);
        }

        [HttpGet("{id}")]
        public IActionResult GetNotification(int id)
        {
            var notification = _context.Notifications.Find(id);
            if (notification == null)
                return NotFound();
            return Ok(notification);
        }

        [HttpPost]
        public IActionResult CreateNotification([FromBody] Notification notification)
        {
            _context.Notifications.Add(notification);
            _context.SaveChanges();
            return CreatedAtAction(nameof(GetNotification), new { id = notification.Id }, notification);
        }
    }
}
