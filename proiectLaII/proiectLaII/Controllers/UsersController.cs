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

        [HttpGet("/getUserByUsername")]
        public async Task<User> GetUserByUsername(string username)
        {
            var returned = await _service.GetUserByUsername(username);
            return returned;
        }

        [HttpGet("/getAllUsers")]
        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _service.GetAllUsers();
        }

       [HttpPut("/addNewUser")]
       public async Task AddNewUser(User user)
       {
            try
            {
                await _service.AddNewUser(user);
            }
            catch (Exception ex)
            {
                BadRequest("User already exists");
            }            
       }

        [HttpPost("/updateExistingUser")]
        public async Task UpdateUser(string whatToChange, User user)
        {
            try
            {
                await _service.UpdateUser(whatToChange,user);
            }
            catch(Exception ex)
            {
                BadRequest("Something went wrong");
            }
        }

        [HttpGet("/getPassword")]
        public string getPassword(string username)
        {
            try
            {
                return _service.getPassword(username);
            }
            catch (Exception ex)
            {
                BadRequest("Something went wrong. Maybe username does not exists");
                return "";
            }
        }

        [HttpDelete("/deleteUser")]
        public async Task DeleteUser(string username)
        {
            try
            {
                await _service.DeleteUser(username);
            }
            catch (Exception ex)
            {
                BadRequest("Something went wrong. Maybe username does not exists");
            }
        }

        [HttpPost("/changeUserAdress")]
        public async Task ChangeUserAdress(string whatToChange, Address address)
        {
            try
            {
                await _service.UpdateUserAdress(whatToChange, address);
            }
            catch (Exception e)
            {
                BadRequest("Something went wrong. Maybe username does not exists");
            }
        }

        [HttpPost("/changeUserBasket")]
        public async Task ChangeBasket(string whatToChange, Basket basket)
        {
            try
            {
                await _service.UpdateBasket(whatToChange, basket);
            }
            catch (Exception e)
            {
                BadRequest("Something went wrong. Maybe username does not exists");
            }
        }
    }
}
