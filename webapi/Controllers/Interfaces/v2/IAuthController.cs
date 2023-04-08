using Microsoft.AspNetCore.Mvc;
using webapi.Models;

namespace webapi.Controllers.Interfaces.v2
{
    public interface IAuthController
    {
        ActionResult<object> Authenticate([FromBody] LoginRequest login);
    }
}