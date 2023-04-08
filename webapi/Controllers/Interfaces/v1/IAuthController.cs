using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers.Interfaces.v1
{
    public interface IAuthController
    {
        Task<IActionResult> CreateUser(string username, string password);
        ActionResult<object> Authenticate([FromBody] LoginRequest login);
        Task<IActionResult> GetUsers();
    }
}
