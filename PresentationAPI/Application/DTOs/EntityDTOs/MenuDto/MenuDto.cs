using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.MenuDto
{
    public class MenuDto
    {
        public DateTime Day { get; set; }
        public bool MealId1 { get; set; } = false;
        public bool MealId2 { get; set; } = false;
    }
}
