using proiectLaII.Models;
using proiectLaII.Repository;

namespace proiectLaII.Services
{
    public class UserService : IUserService
    {

        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public Task Create(User entity)
        {
            throw new NotImplementedException();
        }

        public Task Delete(object id)
        {
            throw new NotImplementedException();
        }

        public Task<List<User>> GetAll()
        {
            throw new NotImplementedException();
        }

        public async Task<User> GetUserByUsername(string username)
        {
            return await _userRepository.GetUserByUserName(username);
        }
        public async Task<IEnumerable<User>> GetAllUsers()
        {
            return await _userRepository.GetAllUsers();
        }

        public async Task AddNewUser(User user)
        {
            await _userRepository.AddNewUser(user);
        }

        public async Task UpdateUser(string whatToChange, User user)
        {
            await _userRepository.UpdateUser(whatToChange,user);
        }

        public string getPassword(string username)
        {
            return  _userRepository.getPassword(username);
        }

        public async Task DeleteUser(string username)
        {
            await _userRepository.DeleteUser(username);
        }
        public async Task UpdateUserAdress(string whatToChange, Address adress)
        {
            await _userRepository.UpdateUserAdress(whatToChange,adress);
        }

        public async Task ChangePassword(string username, string newPassword)
        {
            await _userRepository.ChangePassword(username, newPassword);
        }

        public async Task UpdateBasket(string whatToChange, Basket basket)
        {
            await _userRepository.UpdateBasket(whatToChange,basket);
        }

        public void Save()
        {
            throw new NotImplementedException();
        }

        public Task Update(User entity)
        {
            throw new NotImplementedException();
        }
    }
}
