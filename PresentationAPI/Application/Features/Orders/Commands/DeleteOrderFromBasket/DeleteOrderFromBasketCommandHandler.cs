using Application.Interfaces;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Orders.Commands.DeleteOrderFromBasket
{
    public class DeleteOrderFromBasketCommandHandler : IRequestHandler<DeleteOrderFromBasketCommand, Unit>
    {
        private readonly IOrderRepository _repository;
        private readonly IMapper _mapper;

        public DeleteOrderFromBasketCommandHandler(IOrderRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }
        public async Task<Unit> Handle(DeleteOrderFromBasketCommand command, CancellationToken cancellationToken)
        {
            var order = await _repository.GetByIdAsync(command.Id);
            await _repository.Remove(order);
            await _repository.SaveAsync();
            return Unit.Value;
        }
    }
}
