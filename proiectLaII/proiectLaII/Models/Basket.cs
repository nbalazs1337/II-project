using System.ComponentModel.DataAnnotations;

namespace proiectLaII.Models
{
    public class Basket
    {
        public int TotalItems { get; set; }
        public Products Products { get; set; }
        [Key]
        public int id { get; set; }
    }
}
