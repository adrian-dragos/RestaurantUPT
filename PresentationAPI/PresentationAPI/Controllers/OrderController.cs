using Application.DTOs.EntityDTOs.OrderDto;
using Application.Features.Orders.Commands.AddOrderToBasket;
using Application.Features.Orders.Commands.DeleteOrderFromBasket;
using Application.Features.Orders.Commands.MakeOrder;
using Application.Features.Orders.Queries.GetOrderFromBasket;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
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

        [HttpGet("id")]
        public async Task<ActionResult<Order>> GetOrderItemsFromBasket(int studentId)
        {
            var order = await _mediator.Send(new GetOrderItemsFromBasketQuery { StudentId = studentId });
            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult<Order>> AddOrder([FromBody] AddOrderToBasketDto orderDto)
        {
            var order = await _mediator.Send(new AddOrderToBasket { AddOrderToBasketDto = orderDto});
            return Ok(order);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> DeleteOrder(int id)
        {
            await _mediator.Send(new DeleteOrderFromBasketCommand { Id = id });
            return NoContent();
        }


        [HttpPatch]
        public async Task<ActionResult<Unit>> MakeOrder([FromBody] List<MakeOrderDto> orders)
        {
            await _mediator.Send(new MakeOrderCommand { MakeOrderDto = orders });
            return NoContent();
        }

    }
}
