using MediatR;

namespace Application.Features.Meals.Commands.DeleteMeal
{
    public class DeleteMealCommand : IRequest<Unit>
    {
        public List<int> Ids { get; set; }
    }
}
