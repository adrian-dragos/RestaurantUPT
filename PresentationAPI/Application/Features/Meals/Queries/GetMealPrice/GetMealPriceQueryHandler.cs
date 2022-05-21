using Application.Interfaces;
using AutoMapper;
using MediatR;

namespace Application.Features.Meals.Queries.GetMealPrice
{
    public class GetMealPriceQueryHandler : IRequestHandler<GetMealPriceQuery, double>
    {
        private readonly IMapper _mapper;
        private readonly IMealRepository _repository;

        public GetMealPriceQueryHandler(IMapper mapper, IMealRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }
        public async Task<double> Handle(GetMealPriceQuery query, CancellationToken cancellationToken)
        {
            var mealList = await _repository.Find(x => x.Id == query.MealId);

            if (!mealList.Any())
            {
                return default;
            }
            return mealList.FirstOrDefault().Price;
        }
    }
}
