﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using webapi.Controllers.Interfaces;
using webapi.Controllers.Interfaces.v2;
using webapi.Models.Constants;

namespace webapi.Controllers.Implementations
{
    [Route("api/[controller]")]
    [ApiController]
    public class RolesController : ControllerBase, IRolesController
    {
        [HttpPost("userAdminRole")]
        public async Task<IActionResult> AddAdminRoleToUser(string login)
        {
            return Ok();
        }
        [HttpPost("userRole")]
        public async Task<IActionResult> AddRoleToUser(string login, string role)
        {
            return Ok();
        }
        [HttpPost("userTechRole")]
        public async Task<IActionResult> AddTechRoleToUser(string login, string role)
        {
            return Ok();
        }
        [HttpGet("allRoles")]
        public IActionResult GetAvailiableRoles()
        {
            var data = Enum.GetNames(typeof(UserAuthRoles));
            return Ok(data);
        }
        [HttpGet("allTechRoles")]
        public IActionResult GetAvailiableTechRoles()
        {
            var data = Enum.GetNames(typeof(TechAuthRoles));
            return Ok(data);
        }
        [HttpGet("userRole")]
        public async Task<IActionResult> GetRolesOfUser(string username)
        {
            var data = Enum.GetNames(typeof(TechAuthRoles));
            return Ok(data);
        }
        [HttpGet("myRoles")]
        public IActionResult GetSelfRoles()
        {
            var data = Enum.GetNames(typeof(UserAuthRoles));
            return Ok(data);
        }
        [HttpGet("myTechRoles")]
        public IActionResult GetSelfTechRoles()
        {
            var data = Enum.GetNames(typeof(TechAuthRoles));
            return Ok(data);
        }
    }
}
