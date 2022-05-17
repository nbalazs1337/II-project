using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using proiectLaII.Context;
using proiectLaII.Models;
using proiectLaII.Services;

namespace proiectLaII.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserService _service;

        public UsersController(IUserService service )
        {
            _service = service;
        }

        [HttpGet ("/getByUsername")]
        public async Task<User> GetUserByUsername(string username)
        {
            var returned = await _service.GetUserByUsername(username);
            return returned;
        }
    }
}
