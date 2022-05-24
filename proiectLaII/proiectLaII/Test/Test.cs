using Moq;
using NUnit.Framework;
using proiectLaII.Context;
using proiectLaII.Models;
using proiectLaII.Repository;

namespace proiectLaII.Test
{
    public class Test
    {
        private StoreContext context;
        private User user;
        [Test]
        public void testUser()
        {
            UserRepository repo = new UserRepository(context);
            Mock<IUserRepository> usershandler = new Mock<IUserRepository>();

            Assert.AreEqual(usershandler.Object, repo);

        }
    }
}
