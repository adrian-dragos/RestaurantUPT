using Application.DTOs.EntityDTOs.OrderDto;
using MediatR;

namespace Application.Features.Orders.Queries.GetOrderedItems
{
    public class GetOrderItemsQuery : IRequest<List<OrderedItemsDto>>
    {
        public int StudentId { get; set; }
    }
}
