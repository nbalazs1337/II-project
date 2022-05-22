using proiectLaII.Models;
using proiectLaII.Repository;

namespace proiectLaII.Services
{
    public interface IUserService : IGenericRepository<User>
    {
        Task<User> GetUserByUsername(string username);
        Task<IEnumerable<User>> GetAllUsers();
        Task AddNewUser(User user);
        Task UpdateUser(string whatToChange, User user); 
        string getPassword(string username);
        Task DeleteUser(string username);
        Task UpdateUserAdress(string whatToChange, Address adress);
        Task UpdateBasket(string whatToChange, Basket basket);

    }
}
