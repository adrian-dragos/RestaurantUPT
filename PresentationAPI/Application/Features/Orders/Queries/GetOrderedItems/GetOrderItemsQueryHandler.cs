using Application.DTOs.EntityDTOs.OrderDto;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;
using MediatR;

namespace Application.Features.Orders.Queries.GetOrderedItems
{
    public class GetOrderItemsQueryHandler : IRequestHandler<GetOrderItemsQuery, List<OrderedItemsDto>>
    {

        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;

        public GetOrderItemsQueryHandler(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<OrderedItemsDto>> Handle(GetOrderItemsQuery query, CancellationToken cancellationToken)
        {
            var orders = await _repository.GetAll();
            var filteredOrders = new List<Order>();
            foreach (var order in orders)
            {
                if (order.Status == OrderStatus.InProgress && order.StudentId == query.StudentId)
                {
                    filteredOrders.Add(order);
                }
            }
            return _mapper.Map<List<OrderedItemsDto>>(filteredOrders);
        }
    }
}
