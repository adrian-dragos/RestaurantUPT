using Application.DTOs.EntityDTOs.OrderDto;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Orders.Commands.AddOrderToBasket
{
    public class AddOrderCommandHandler : IRequestHandler<AddOrderToBasket, OrderDto>
    {
        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;

        public AddOrderCommandHandler(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public async Task<OrderDto> Handle(AddOrderToBasket command, CancellationToken cancellationToken)
        {
            var order = _mapper.Map<Order>(command.AddOrderToBasketDto);
            var orderCreated = await _repository.AddAsync(order);
            await _repository.SaveAsync();
            return _mapper.Map<OrderDto>(orderCreated);
        }
    }
}
