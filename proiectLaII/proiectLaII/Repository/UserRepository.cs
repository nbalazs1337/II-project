using Microsoft.EntityFrameworkCore;
using proiectLaII.Context;
using proiectLaII.Models;

namespace proiectLaII.Repository
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(StoreContext context) : base(context)
        {

        }

        public Task<User> GetUserByUserName(string userName)
        {
            if (!string.IsNullOrEmpty(userName))
            {
                var user = _context.Users.FirstOrDefaultAsync();
                return user;
            }
            else throw new Exception("Name not found");
        }
    }
}
