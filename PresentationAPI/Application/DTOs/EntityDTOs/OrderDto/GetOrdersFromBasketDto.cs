using Application.DTOs.CommonDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.OrderDto
{
    public class GetOrdersFromBasketDto : BaseEntityDto
    {
        public int? MealId { get; set; }

        public string? Name { get; set; }
        public double Price { get; set; }
        // TODO: make it work for images
        //public byte[]? ImageData { get; set; }
        public int? StudentId { get; set; }
        public int? Quantity { get; set; }
        public double? TotalPrice { get; set; }
    }
}
