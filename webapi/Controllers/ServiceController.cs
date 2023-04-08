using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using webapi.Controllers.Interfaces;
using webapi.Models;
using webapi.Models.Constants;

namespace webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase
    {
        [HttpPost("data")]
        public async Task<IActionResult> AddData([FromBody] FieldSet data)
        {
            var _data = ServiceSet.Data.Where(x => x.ServiceName == data.ServiceName).FirstOrDefault();
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            return Ok();
        }
        [HttpPatch("data")]
        public async Task<IActionResult> EditData([FromBody] FieldSet data)
        {
            var _data = ServiceSet.Data.Where(x => x.ServiceName == data.ServiceName).FirstOrDefault();
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            return Ok();
        }

        [HttpGet("data/{serviceName},{pageSize},{pageNumber}")]
        public async Task<IActionResult> GetData([FromRoute] string serviceName, [FromRoute] int pageSize, [FromRoute] int pageNumber)
        {
            var data = ServiceSet.Data.Where(x => x.ServiceName == serviceName).FirstOrDefault();
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            var mockData = Enumerable.Range(pageSize * pageNumber, pageSize * (pageNumber + 1)).Select(
                x => new FieldSet(x, data.ServiceName, data.Fields)
            ).ToList();
            return Ok(JsonConvert.SerializeObject(mockData));
        }
        [HttpGet("fields/{serviceName}")]
        public IActionResult GetFields([FromRoute] string serviceName)
        {
            var data = ServiceSet.Data.Where(x => x.ServiceName == serviceName).FirstOrDefault();
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            return Ok(data);
        }
        [HttpGet("size/{serviceName}")]
        public async Task<IActionResult> GetTotalDataSize([FromRoute] string serviceName)
        {
            return Ok(235.ToString());
        }
        [HttpPost("csv")]
        public async Task<IActionResult> ImportCsv([FromBody] CsvData csvData)
        {
            return Ok();
        }
        [HttpDelete("data/{serviceName},{dataId}")]
        public async Task<IActionResult> RemoveData([FromRoute] string serviceName, [FromRoute] int dataId)
        {
            var data = ServiceSet.Data.Where(x => x.ServiceName == serviceName).FirstOrDefault();
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            return Ok();
        }
    }
}
