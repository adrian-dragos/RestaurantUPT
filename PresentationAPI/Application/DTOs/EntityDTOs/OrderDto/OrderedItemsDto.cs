using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.OrderDto
{
    public class OrderedItemsDto
    {
        public int? MealId { get; set; }
        public int? Quantity { get; set; }
        public double? TotalPrice { get; set; }
        public DateTime? DateOfDelivery { get; set; }
    }
}
