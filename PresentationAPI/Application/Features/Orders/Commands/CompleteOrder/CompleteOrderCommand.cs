using Application.DTOs.EntityDTOs.OrderDto;
using MediatR;

namespace Application.Features.Orders.Commands.CompleteOrder
{
    public class CompleteOrderCommand : IRequest<Unit>
    {
        public List<CompleteOrderDto> CompleteOrder { get; set; }
    }
}
