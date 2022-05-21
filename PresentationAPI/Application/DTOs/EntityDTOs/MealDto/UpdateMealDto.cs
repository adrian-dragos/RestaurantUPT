using Application.DTOs.CommonDTOs;

namespace Application.DTOs.EntityDTOs.MealDto
{
    public class UpdateMealDto : BaseEntityDto
    {
        public string? Name { get; set; }
        public double Price { get; set; }
        // TODO: make it work for images
        //public byte[]? ImageData { get; set; }
    }
}
