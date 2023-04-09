using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using webapi.Controllers.Interfaces;
using webapi.Controllers.Interfaces.v2;
using webapi.Models;
using webapi.Models.Constants;

namespace webapi.Controllers.Implementations
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServiceController : ControllerBase, IServiceController
    {
        [HttpPost("data")]
        public async Task<IActionResult> AddData([FromBody] FieldSet data)
        {
            var _data = ServiceSet.Data.Where(x => x.ServiceName == data.ServiceName).FirstOrDefault();
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            return Ok("Всё ок!");
        }
        

        [HttpPatch("data")]
        public async Task<IActionResult> EditData([FromBody] List<FieldSet> data)
        {
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            return Ok();
        }

        [HttpPost("data/{pageSize},{pageNumber}")]
        public async Task<IActionResult> GetData([FromBody] FieldSet set, [FromRoute] int pageSize, [FromRoute] int pageNumber)
        {
            var data = ServiceSet.Data.Where(x => x.ServiceName == set.ServiceName).FirstOrDefault();
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            var mockData = Enumerable.Range(pageSize * pageNumber, pageSize ).Select(
                x => new FieldSet(x, data.ServiceName, data.Fields)
            ).ToList();
            FieldSetList result = new();
            result.Fields = mockData;
            result.TotalCount = mockData.Count*5;
            return Ok(JsonConvert.SerializeObject(result));
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

        [HttpDelete("data")]
        public async Task<IActionResult> RemoveData([FromBody] List<FieldSet> data)
        {
            if (data == null)
            {
                return BadRequest("Ты питух");
            }
            return Ok();
        }
    }
}
