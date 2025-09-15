using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;
using System.Collections.Generic;
using Gym_Clothes_ECommerce.Web.Models;
using System.Text.Json.Serialization;

namespace Gym_Clothes_ECommerce.Web.Controllers
{
    public class OrdersController : Controller
    {
        private readonly IHttpClientFactory _clientFactory;
        public OrdersController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<IActionResult> Index()
        {
            var client = _clientFactory.CreateClient();
            var response = await client.GetAsync("http://localhost:5006/api/orders");
            if (!response.IsSuccessStatusCode)
                return View(new List<OrderViewModel>());
            var json = await response.Content.ReadAsStringAsync();
            var orders = JsonSerializer.Deserialize<List<OrderViewModel>>(json);
            return View(orders);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(OrderViewModel order)
        {
            var client = _clientFactory.CreateClient();
            var content = new StringContent(JsonSerializer.Serialize(order), System.Text.Encoding.UTF8, "application/json");
            var response = await client.PostAsync("http://localhost:5006/api/orders", content);
            if (response.IsSuccessStatusCode)
                return RedirectToAction("Index");
            return View(order);
        }
    }
}
