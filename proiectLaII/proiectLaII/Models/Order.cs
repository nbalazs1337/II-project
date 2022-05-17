using System.ComponentModel.DataAnnotations;

namespace proiectLaII.Models
{
    public class Order
    {
        public double TotalValue { get; set; }
        public Address Address { get; set; }   
        public User User { get; set; }
        [Key]
        public int id { get; set; }

    }
}
