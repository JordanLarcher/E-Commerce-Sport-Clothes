using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace Gym_Clothes_ECommerce.NotificationService.Controllers
{
    [ApiExplorerSettings(IgnoreApi = true)]
    public class ErrorController : ControllerBase
    {
        [Route("/error")]
        public IActionResult HandleError() =>
            Problem(detail: HttpContext.Features.Get<IExceptionHandlerFeature>()?.Error.Message);
    }
}
