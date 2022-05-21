using Application.DTOs.EntityDTOs.OrderDto;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Orders.Queries.GetOrderFromBasket
{
    public class GetOrderItemsFromBasketQueryHandler : IRequestHandler<GetOrderItemsFromBasketQuery, List<OrderDto>>
    {
        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;

        public GetOrderItemsFromBasketQueryHandler(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<List<OrderDto>> Handle(GetOrderItemsFromBasketQuery query, CancellationToken cancellationToken)
        {
            var orders = await _repository.GetAll();
            var filteredOrders = new List<Order>();
            foreach(var order in orders)
            {
                if (order.Status == OrderStatus.InBasket && order.StudentId == query.StudentId)
                {
                    filteredOrders.Add(order);
                }
            }
            return _mapper.Map<List<OrderDto>>(filteredOrders);
        }
    }
}
