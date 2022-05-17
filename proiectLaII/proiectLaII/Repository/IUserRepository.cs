using proiectLaII.Models;

namespace proiectLaII.Repository
{
    public interface IUserRepository : IGenericRepository<User>
    {
        Task<User> GetUserByUserName(string userName);
    }
}
