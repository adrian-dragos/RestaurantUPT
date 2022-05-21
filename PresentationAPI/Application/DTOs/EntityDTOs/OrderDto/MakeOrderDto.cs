using Application.DTOs.CommonDTOs;
using Application.DTOs.EnumDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.OrderDto
{
    public class MakeOrderDto : BaseEntityDto
    {
        public int? MealId { get; set; }
        public int? StudentId { get; set; }
        public int? Quantity { get; set; }
        public double? TotalPrice { get; set; }
        public DateTime? DateOfDelivery { get; set; }
    }
}
