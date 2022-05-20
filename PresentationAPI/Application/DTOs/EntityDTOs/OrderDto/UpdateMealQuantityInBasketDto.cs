using Application.DTOs.CommonDTOs;
using Application.DTOs.EnumDTOs;

namespace Application.DTOs.EntityDTOs.OrderDto
{
    public class UpdateMealQuantityInBasketDto : BaseEntityDto
    {
        public int? MealId { get; set; }
        public int? StudentId { get; set; }
        public int? Quantity { get; set; }
        public double? TotalPrice { get; set; }
        public DateTime? DateOfDelivery { get; set; }
    }
}
