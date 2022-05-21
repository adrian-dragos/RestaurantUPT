using Application.DTOs.EnumDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.OrderDto
{
    public class AddOrderToBasketDto
    {
        public int? MealId { get; set; }
        public int? StudentId { get; set; }
    }
}
