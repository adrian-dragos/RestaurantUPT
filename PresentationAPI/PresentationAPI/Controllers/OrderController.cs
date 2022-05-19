using Application.DTOs.EntityDTOs.OrderDto;
using Application.Features.Orders.Commands.AddOrderToBasket;
using Application.Features.Orders.Commands.DeleteOrderFromBasket;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace PresentationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IMediator _mediator;

        public OrderController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<Order>> AddOrders([FromBody] AddOrderToBasketDto orderDto)
        {
            var order = await _mediator.Send(new AddOrderToBasket { AddOrderToBasketDto = orderDto});
            return Ok(order);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> DeleteOrder(int id)
        {
            var order = await _mediator.Send(new DeleteOrderFromBasketCommand { Id = id });
            return NoContent();
        }

    }
}
