using Microsoft.EntityFrameworkCore;
using proiectLaII.Context;
using proiectLaII.Models;
using System.Linq;

namespace proiectLaII.Repository
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        readonly GenericRepository<User> _repository;
        public UserRepository(StoreContext context) : base(context)
        {
         
        }

        public Task<User> GetUserByUserName(string userName)
        {
            if (!string.IsNullOrEmpty(userName))
            {
                var user = _context.Users.Include(a=>a.Adress).Include(b=>b.Basket).FirstOrDefaultAsync(x => x.UserName == userName);
                return user;
            }
            else throw new Exception("Name not found");
        }

        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _context.Users.Include(a => a.Adress).Include(b => b.Basket).ToListAsync();
        }
        public async Task AddNewUser(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public async Task UpdateUser(string whatToChange, User changedUser)
        {
            var requestedUser = GetUserByUserName(whatToChange);
            
            if (requestedUser.Result != null)
            {
                requestedUser.Result.Name = changedUser.Name;
                requestedUser.Result.UserName = changedUser.UserName;
                requestedUser.Result.Password = changedUser.Password;
                requestedUser.Result.Email = changedUser.Email;
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateUserAdress(string whatToChange, Address adress)
        {
            var requestedUser = GetUserByUserName(whatToChange);
            if (requestedUser.Result != null)
            {
                requestedUser.Result.Adress=adress;
                await _context.SaveChangesAsync();
            }
        }

        public async Task UpdateBasket (string whatToChange, Basket basket)
        {
            var requestedUser = GetUserByUserName(whatToChange);
            if (requestedUser.Result != null)
            {
                requestedUser.Result.Basket = basket;
                await _context.SaveChangesAsync();
            }
        }

        public string getPassword(string userName)
        {
            var requestedUser = GetUserByUserName(userName);
            return requestedUser.Result.Password;
        }

        public async Task DeleteUser(string userName)
        {
            var requestedUser = GetUserByUserName(userName);
            _context.Users.Remove(requestedUser.Result);
            await _context.SaveChangesAsync();
        }

    }
}
