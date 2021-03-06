using Application.DTOs.CommonDTOs;

namespace Application.DTOs.EntityDTOs.MealDto
{
    public class MealDto : BaseEntityDto
    {
        public string? Name { get; set; }
        public double Price { get; set; }
        public byte[]? ImageData { get; set; }
    }
}
