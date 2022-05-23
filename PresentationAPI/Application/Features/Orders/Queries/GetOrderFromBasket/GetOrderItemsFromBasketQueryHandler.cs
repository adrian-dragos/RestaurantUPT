using Application.DTOs.EntityDTOs.OrderDto;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;
using MediatR;

namespace Application.Features.Orders.Queries.GetOrderFromBasket
{
    public class GetOrderItemsFromBasketQueryHandler : IRequestHandler<GetOrderItemsFromBasketQuery, List<GetOrdersFromBasketDto>>
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMealRepository _mealRepository;
        private readonly IMapper _mapper;

        public GetOrderItemsFromBasketQueryHandler(IOrderRepository orderRepository, IMealRepository mealRepository, IMapper mapper)
        {
            _orderRepository = orderRepository;
            _mealRepository = mealRepository;
            _mapper = mapper;
        }

        public async Task<List<GetOrdersFromBasketDto>> Handle(GetOrderItemsFromBasketQuery query, CancellationToken cancellationToken)
        {
            var orders = await _orderRepository.GetAll();
            var filteredOrders = new List<Order>();
            foreach (var order in orders)
            {
                if (order.Status == OrderStatus.InBasket && order.StudentId == query.StudentId)
                {
                    filteredOrders.Add(order);
                }
            }
            var result = _mapper.Map<List<GetOrdersFromBasketDto>>(filteredOrders);
            foreach (var order in result)
            {
                var mealList = await _mealRepository.Find(x => x.Id == order.MealId);
                var meal = mealList.FirstOrDefault();
                if (meal != null)
                {
                    order.Name = meal.Name;
                    order.Price = meal.Price;
                }
            }
            return result;
        }
    }
}
