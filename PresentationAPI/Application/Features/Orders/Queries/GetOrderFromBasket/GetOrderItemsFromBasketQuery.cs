using Application.DTOs.EntityDTOs.OrderDto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Orders.Queries.GetOrderFromBasket
{
    public class GetOrderItemsFromBasketQuery : IRequest<List<GetOrdersFromBasketDto>>
    {
        public int StudentId { get; set; }
    }
}
