using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers.Interfaces.v1
{
    public interface IServiceController
    {
        Task<IActionResult> AddData(Dictionary<string, string> data, string serviceName);
        Task<IActionResult> EditData(Dictionary<string, string> data, string serviceName, int dataId);
        Task<IActionResult> GetData(string serviceName, int pageNumber);
        IActionResult GetFields(string serviceName);
        Task<IActionResult> GetTotalDataSize(string serviceName);
        Task<IActionResult> ImportCsv([FromBody] CsvData csvData);
        Task<IActionResult> RemoveData(string serviceName, int dataId);
    }
}
