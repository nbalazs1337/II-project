using System.ComponentModel.DataAnnotations;

namespace proiectLaII.Models
{
    public class Address
    {
        public string City { get; set; }
        public string Country { get; set; }
        public string Street { get; set; }
        public string Building { get; set; }
        public string PostalCode { get; set; }
        [Key]
        public int id { get; set; }

    }
}
