using System.ComponentModel.DataAnnotations;

namespace proiectLaII.Models
{
    public class User
    {
        public string? Name { get; set; }
        [Key]
        public string UserName { get; set; }
        public string? Email { get; set; }
        public string Password { get; set; }
        public Basket? Basket { get; set; }
        public Address? Adress { get; set; }
    }
}
