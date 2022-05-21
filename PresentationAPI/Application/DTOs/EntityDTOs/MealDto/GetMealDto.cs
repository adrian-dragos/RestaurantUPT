using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.MealDto
{
    public class GetMealDto
    {
        public string? Name { get; set; }
        public double? Price { get; set; }
        public byte[]? ImageData { get; set; }
    }
}
