using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Threading.Tasks;
using System.Text.Json;
using System.Collections.Generic;
using Gym_Clothes_ECommerce.Web.Models;

namespace Gym_Clothes_ECommerce.Web.Controllers
{
    public class PaymentsController : Controller
    {
        private readonly IHttpClientFactory _clientFactory;
        public PaymentsController(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;
        }

        public async Task<IActionResult> Index()
        {
            var client = _clientFactory.CreateClient();
            var response = await client.GetAsync("http://localhost:5007/api/payments");
            if (!response.IsSuccessStatusCode)
                return View(new List<PaymentViewModel>());
            var json = await response.Content.ReadAsStringAsync();
            var payments = JsonSerializer.Deserialize<List<PaymentViewModel>>(json);
            return View(payments);
        }

        public IActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(PaymentViewModel payment)
        {
            var client = _clientFactory.CreateClient();
            var content = new StringContent(JsonSerializer.Serialize(payment), System.Text.Encoding.UTF8, "application/json");
            var response = await client.PostAsync("http://localhost:5007/api/payments", content);
            if (response.IsSuccessStatusCode)
                return RedirectToAction("Index");
            return View(payment);
        }
    }
}
