using Application.DTOs.EntityDTOs.OrderDto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Orders.Commands.AddOrderToBasket
{
    public class AddOrderToBasket : IRequest<OrderDto>
    {
        public AddOrderToBasketDto? AddOrderToBasketDto { get; set; }
    }
}
