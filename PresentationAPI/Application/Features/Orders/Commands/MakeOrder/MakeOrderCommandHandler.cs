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

namespace Application.Features.Orders.Commands.MakeOrder
{
    public class MakeOrderCommandHandler : IRequestHandler<MakeOrderCommand, Unit>
    {
        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;

        public MakeOrderCommandHandler(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<Unit> Handle(MakeOrderCommand command, CancellationToken cancellationToken)
        {
            foreach (var orderDto in command.MakeOrderDto)
            {
                var order = _mapper.Map<Order>(orderDto);
                var existentOrderList = await _repository.Find(x => x.Id == orderDto.Id);
                var existentOrder = existentOrderList.FirstOrDefault();
                if (existentOrder != null && existentOrder.Status == OrderStatus.InBasket)
                {

                    await _repository.Update(order);
                    await _repository.SaveAsync();
                }
            }
            return Unit.Value;
        }
    }
}
