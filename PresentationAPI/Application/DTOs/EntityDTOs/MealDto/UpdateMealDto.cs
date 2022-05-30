using Application.DTOs.CommonDTOs;

namespace Application.DTOs.EntityDTOs.MealDto
{
    public class UpdateMealDto : BaseEntityDto
    {
        public string? Name { get; set; }
        public double Price { get; set; }
        public string? ImageData { get; set; }
    }
}
