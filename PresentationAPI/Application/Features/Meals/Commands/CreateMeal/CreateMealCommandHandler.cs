using Application.DTOs.EntityDTOs.MealDto;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.Meals.Commands.CreateMeal
{
    public class CreateMealCommandHandler : IRequestHandler<CreateMealCommand, MealDto>
    {
        private readonly IMapper _mapper;
        private readonly IMealRepository _repository;

        public CreateMealCommandHandler(IMapper mapper, IMealRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<MealDto> Handle(CreateMealCommand command, CancellationToken cancellationToken)
        {
            var meal = _mapper.Map<Meal>(command.CreateMeal);
            var createdMeal = await _repository.AddAsync(meal);
            await _repository.SaveAsync();
            return _mapper.Map<MealDto>(createdMeal);
        }
    }
}
