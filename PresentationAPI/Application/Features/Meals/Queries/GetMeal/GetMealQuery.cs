using Application.DTOs.EntityDTOs.MealDto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Meals.Queries.GetMeal
{
    public class GetMealQuery : IRequest<GetMealDto>
    {
        public int MealId { get; set; }
    }
}
