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

namespace Application.Features.Orders.Commands.UpateQuantityInBasket
{
    public class UpdateMealQuantityInBasketCommandHandler : IRequestHandler<UpdateMealQuantityInBasketCommand, Unit>
    {
        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;

        public UpdateMealQuantityInBasketCommandHandler(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<Unit> Handle(UpdateMealQuantityInBasketCommand command, CancellationToken cancellationToken)
        {
            foreach (var orderDto in command.MealDto)
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
