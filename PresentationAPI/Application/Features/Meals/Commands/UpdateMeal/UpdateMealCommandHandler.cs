using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.Meals.Commands.UpdateMeal
{
    public class UpdateMealCommandHandler : IRequestHandler<UpdateMealCommand, Unit>
    {
        private readonly IMapper _mapper;
        private readonly IMealRepository _repository;

        public UpdateMealCommandHandler(IMapper mapper, IMealRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }
        public async Task<Unit> Handle(UpdateMealCommand command, CancellationToken cancellationToken)
        {
            
            var meal = _mapper.Map<Meal>(command.MealDto);
            var mealList = await _repository.Find(x => x.Id == meal.Id);
            var existentMeal = mealList.FirstOrDefault();
            if (existentMeal != null)
            {
                await _repository.Update(meal);
                await _repository.SaveAsync();
            }
            
            return Unit.Value;
        }
    }
}
