using Application.DTOs.EntityDTOs.MealDto;
using MediatR;

namespace Application.Features.Meals.Commands.UpdateMeal
{
    public class UpdateMealCommand : IRequest<Unit>
    {
        public UpdateMealDto MealDto { get; set; }
    }
}
