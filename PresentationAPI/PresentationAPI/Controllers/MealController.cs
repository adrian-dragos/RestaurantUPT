using Application.DTOs.EntityDTOs.MealDto;
using Application.Features.Meals.Queries.GetMeal;
using Application.Features.Meals.Queries.GetMealPrice;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace PresentationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MealController : ControllerBase
    {
        private readonly IMediator _mediator;

        public MealController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("{mealId}/price")]
        public async Task<ActionResult<double>> GetMealPrice(int mealId)
        {
            var menu = await _mediator.Send(new GetMealPriceQuery { MealId = mealId });
            return Ok(menu);
        }

        [HttpGet("{mealId}")]
        public async Task<ActionResult<GetMealDto>> GetMeal(int mealId)
        {
            var menu = await _mediator.Send(new GetMealQuery { MealId = mealId });
            return Ok(menu);
        }
    }
}
