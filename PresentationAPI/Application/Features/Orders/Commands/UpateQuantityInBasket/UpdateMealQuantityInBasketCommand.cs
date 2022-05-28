using Application.DTOs.EntityDTOs.OrderDto;
using MediatR;

namespace Application.Features.Orders.Commands.UpateQuantityInBasket
{
    public class UpdateMealQuantityInBasketCommand : IRequest<Unit>
    {
        public UpdateMealQuantityInBasketDto MealDto { get; set; }
    }
}
