﻿using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers.Interfaces.v2
{
    public interface IServiceController
    {
        Task<IActionResult> AddData([FromBody] FieldSet data);
        Task<IActionResult> EditData([FromBody] FieldSet data);
        Task<IActionResult> GetData([FromRoute] string serviceName, [FromRoute] int pageSize, [FromRoute] int pageNumber);
        IActionResult GetFields([FromRoute] string serviceName);
        Task<IActionResult> GetTotalDataSize([FromRoute] string serviceName);
        Task<IActionResult> ImportCsv([FromBody] CsvData csvData);
        Task<IActionResult> RemoveData([FromRoute] string serviceName, [FromRoute] int dataId);
    }
}