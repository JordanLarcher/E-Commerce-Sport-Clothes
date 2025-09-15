using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;
using System.Collections.Generic;
using Gym_Clothes_ECommerce.Web.Models;

namespace Gym_Clothes_ECommerce.Web.Controllers
{
    public class NotificationsController : Controller
    {
        private readonly IHttpClientFactory _clientFactory;
        public NotificationsController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<IActionResult> Index()
        {
            var client = _clientFactory.CreateClient();
            var response = await client.GetAsync("http://localhost:5008/api/notifications");
            if (!response.IsSuccessStatusCode)
                return View(new List<NotificationViewModel>());
            var json = await response.Content.ReadAsStringAsync();
            var notifications = JsonSerializer.Deserialize<List<NotificationViewModel>>(json);
            return View(notifications);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(NotificationViewModel notification)
        {
            var client = _clientFactory.CreateClient();
            var content = new StringContent(JsonSerializer.Serialize(notification), System.Text.Encoding.UTF8, "application/json");
            var response = await client.PostAsync("http://localhost:5008/api/notifications", content);
            if (response.IsSuccessStatusCode)
                return RedirectToAction("Index");
            return View(notification);
        }
    }
}
