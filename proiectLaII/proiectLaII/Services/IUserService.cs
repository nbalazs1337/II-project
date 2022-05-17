using proiectLaII.Models;
using proiectLaII.Repository;

namespace proiectLaII.Services
{
    public interface IUserService : IGenericRepository<User>
    {
        Task<User> GetUserByUsername(string username);
    }
}
