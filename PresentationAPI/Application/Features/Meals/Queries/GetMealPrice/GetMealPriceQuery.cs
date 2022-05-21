using MediatR;

namespace Application.Features.Meals.Queries.GetMealPrice
{
    public class GetMealPriceQuery : IRequest<double>
    {
        public int MealId { get; set; }
    }
}
