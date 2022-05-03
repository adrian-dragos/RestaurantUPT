using Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Menu : BaseEntity
    {
        public DateTime Day { get; set; }
        public bool MealId1 { get; set; } = false;
        public bool MealId2 { get; set; } = false;
    }
}
