using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using webapi.Controllers.Interfaces;
using webapi.Models.Constants;

namespace webapi.Controllers.Implementations
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase
    {
        public async Task<IActionResult> AddAdminRoleToUser(string login)
        {
            return Ok();
        }

        public async Task<IActionResult> AddRoleToUser(string login, string role)
        {
            return Ok();
        }

        public IActionResult GetAvailiableRoles()
        {
            var data = Enum.GetValues(typeof(UserAuthRoles)).Cast<string>();
            return Ok(data);
        }

        public async Task<IActionResult> GetRolesOfUser(string username)
        {
            var data = Enum.GetValues(typeof(TechAuthRoles)).Cast<string>();
            return Ok(data);
        }

        public IActionResult GetSelfRoles()
        {
            var data = Enum.GetValues(typeof(UserAuthRoles)).Cast<string>();
            return Ok(data);
        }
    }
}
