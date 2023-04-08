using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers.Interfaces
{
    public interface IAuthController
    {
        Task<IActionResult> CreateUser(string username, string password);
        Task<IActionResult> GetAuthToken(string username, string password);
        Task<IActionResult> GetUsers();
    }
}
