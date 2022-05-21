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

namespace Application.Features.Orders.Commands.CompleteOrder
{
    public class CompleteOrderCommandHandler : IRequestHandler<CompleteOrderCommand, Unit>
    {
        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;

        public CompleteOrderCommandHandler(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<Unit> Handle(CompleteOrderCommand command, CancellationToken cancellationToken)
        {
            foreach (var orderDto in command.CompleteOrder)
            {
                var existentOrderList = await _repository.Find(x => x.Id == orderDto.Id);
                var existentOrder = existentOrderList.FirstOrDefault();
                if (existentOrder != null && existentOrder.Status == OrderStatus.InProgress)
                {
                    existentOrder.Status = OrderStatus.Done;
                    await _repository.Update(existentOrder);
                    await _repository.SaveAsync();
                }
            }
            return Unit.Value;
        }
    }
}
