using Application.DTOs.EntityDTOs.MealDto;
using Application.Features.Meals.Commands.CreateMeal;
using Application.Features.Meals.Commands.DeleteMeal;
using Application.Features.Meals.Commands.UpdateMeal;
using Application.Features.Meals.Queries.GetMeal;
using Application.Features.Meals.Queries.GetMealPrice;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
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
            var meal = await _mediator.Send(new GetMealPriceQuery { MealId = mealId });
            return Ok(meal);
        }

        [HttpGet("{mealId}")]
        public async Task<ActionResult<GetMealDto>> GetMeal(int mealId)
        {
            var meal = await _mediator.Send(new GetMealQuery { MealId = mealId });
            return Ok(meal);
        }

        [Authorize]
        [HttpPost()]
        public async Task<ActionResult<double>> CreateMeal(CreateMealDto mealDto)
        {
            var meal = await _mediator.Send(new CreateMealCommand { CreateMeal = mealDto });
            return Ok(meal);
        }

        [Authorize]
        [HttpPatch()]
        public async Task<ActionResult<Unit>> UpdateMeal(UpdateMealDto mealDto)
        {
            await _mediator.Send(new UpdateMealCommand { MealDto = mealDto });
            return NoContent();
        }

        [Authorize]
        [HttpDelete()]
        public async Task<ActionResult<Unit>> DeleteMeal([FromBody]List<int> ids)
        {
            await _mediator.Send(new DeleteMealCommand { Ids = ids });
            return NoContent();
        }
    }
}
