using proiectLaII.Models;

namespace proiectLaII.Repository
{
    public interface IUserRepository : IGenericRepository<User>
    {
        Task<User> GetUserByUserName(string userName);
        Task<IEnumerable<User>> GetAllUsers();
        Task AddNewUser(User user);
        Task UpdateUser(string whatToChange, User user);
        string getPassword(string username);
        Task DeleteUser(string username);
        Task UpdateUserAdress(string whatToChange, Address adress);
        Task UpdateBasket(string whatToChange, Basket basket);
        Task ChangePassword(string username, string newPassword);
    }
}
