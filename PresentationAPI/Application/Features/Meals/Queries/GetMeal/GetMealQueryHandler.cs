using Application.DTOs.EntityDTOs.MealDto;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Meals.Queries.GetMeal
{
    public class GetMealQueryHandler : IRequestHandler<GetMealQuery, GetMealDto>
    {
        private readonly IMapper _mapper;
        private readonly IMealRepository _repository;

        public GetMealQueryHandler(IMapper mapper, IMealRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }
        public async Task<GetMealDto> Handle(GetMealQuery query, CancellationToken cancellationToken)
        {
            var mealList = await _repository.Find(x => x.Id == query.MealId);

            if (!mealList.Any())
            {
                return default;
            }
            return _mapper.Map<GetMealDto>(mealList.FirstOrDefault()); ;
        }
    }
}
