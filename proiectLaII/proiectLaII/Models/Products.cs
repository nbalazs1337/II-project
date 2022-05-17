using System.ComponentModel.DataAnnotations;

namespace proiectLaII.Models
{
    public class Products
    {
        public string Name { get; set; }
        public Brand Brand { get; set; }
        public double Price { get; set; }
        [Key]
        public int id { get; set; }

    }
}
