using Application.Interfaces;
using AutoMapper;
using MediatR;

namespace Application.Features.Meals.Commands.DeleteMeal
{
    public class DeleteMealCommandHandler : IRequestHandler<DeleteMealCommand, Unit>
    {
        private readonly IMapper _mapper;
        private readonly IMealRepository _repository;

        public DeleteMealCommandHandler(IMapper mapper, IMealRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }
        public async Task<Unit> Handle(DeleteMealCommand command, CancellationToken cancellationToken)
        {
            foreach (var id in command.Ids)
            {
                var meal = await _repository.GetByIdAsync(id);
                if (meal == null)
                {
                    return default;
                }
                await _repository.Remove(meal);
                await _repository.SaveAsync();
            }
            return Unit.Value;
        }
    }
}
