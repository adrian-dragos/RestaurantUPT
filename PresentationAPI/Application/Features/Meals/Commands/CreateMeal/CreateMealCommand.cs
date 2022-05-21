using Application.DTOs.EntityDTOs.MealDto;
using MediatR;

namespace Application.Features.Meals.Commands.CreateMeal
{
    public class CreateMealCommand : IRequest<MealDto>
    {
        public CreateMealDto CreateMeal { get; set; }
    }
}
