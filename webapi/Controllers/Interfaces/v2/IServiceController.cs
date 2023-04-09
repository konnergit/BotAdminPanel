using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers.Interfaces.v2
{
    public interface IServiceController
    {
        Task<IActionResult> AddData([FromBody] FieldSet data);
        Task<IActionResult> EditData([FromBody] List<FieldSet> data);
        Task<IActionResult> GetData([FromBody] FieldSet set, [FromRoute] int pageSize, [FromRoute] int pageNumber);
        IActionResult GetFields([FromRoute] string serviceName);
        Task<IActionResult> GetTotalDataSize([FromRoute] string serviceName);
        Task<IActionResult> ImportCsv([FromBody] CsvData csvData);
        Task<IActionResult> RemoveData([FromBody] List<FieldSet> data);
    }
}