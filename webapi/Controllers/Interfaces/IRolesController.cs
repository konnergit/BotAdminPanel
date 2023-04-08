using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers.Interfaces
{
    public interface IRolesController
    {
        Task<IActionResult> AddAdminRoleToUser(string login);
        Task<IActionResult> AddRoleToUser(string login, string role);
        IActionResult GetAvailiableRoles();
        Task<IActionResult> GetRolesOfUser(string username);
        IActionResult GetSelfRoles();
    }
}
