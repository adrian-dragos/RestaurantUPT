using Application.DTOs.CommonDTOs;
using Application.DTOs.EnumDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.OrderDto
{
    public class OrderDto : BaseEntityDto
    {
        public int? MealId { get; set; }
        public int? StudentId { get; set; }
        public int? Quantity { get; set; }
        public double? TotalPrice { get; set; }
        public DateTime? DateOfDeleivery { get; set; }
        public OrderStatusDto? Status { get; set; }
    }
}
