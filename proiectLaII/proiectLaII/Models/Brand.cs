using System.ComponentModel.DataAnnotations;

namespace proiectLaII.Models
{
    public class Brand
    {
        public string Name { get; set; }
        [Key]
        public int id { get; set; }
    }
}
