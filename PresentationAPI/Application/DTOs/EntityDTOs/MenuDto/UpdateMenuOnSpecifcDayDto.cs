using Application.DTOs.CommonDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.MenuDto
{
    public class UpdateMenuOnSpecifcDayDto : BaseEntityDto
    {
        public DateTime Day { get; set; }
        public bool MealId1 { get; set; } = false;
        public bool MealId2 { get; set; } = false;
        public bool? MealId3 { get; set; } = false;
        public bool? MealId4 { get; set; } = false;
        public bool? MealId5 { get; set; } = false;
        public bool? MealId6 { get; set; } = false;
        public bool? MealId7 { get; set; } = false;
        public bool? MealId8 { get; set; } = false;
        public bool? MealId9 { get; set; } = false;
        public bool? MealId10 { get; set; } = false;
    }
}
