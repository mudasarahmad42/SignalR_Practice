using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalR_ProgressBar.Data.StaticData;
using SignalR_ProgressBar.Services;
using SignalR_ProgressBar.SignalRHubs;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace SignalR_ProgressBar.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartsController : ControllerBase
    {
        private readonly IHubContext<ChartHub> _hub;
        private readonly TimerManager _timer;

        public ChartsController(IHubContext<ChartHub> hub, TimerManager timer)
        {
            _hub = hub;
            _timer = timer;
        }

        [HttpGet]
        public IActionResult Get()
        {
            if (!_timer.IsTimerStarted)
                _timer.PrepareTimer(() => _hub.Clients.All.SendAsync("TransferChartData", DataManager.GetData()));
            return Ok(new { Message = "Request Completed" });
        }

        [HttpGet]
        [Route("PleaseWork")]
        public IActionResult PleaseWork()
        {
            return Ok(new { Data = true , Message = "Request Completed" });
        }
    }
}
