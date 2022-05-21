using Application.DTOs.EntityDTOs.OrderDto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Orders.Commands.MakeOrder
{
    public class MakeOrderCommand : IRequest<Unit>
    {
        public List<MakeOrderDto> MakeOrderDto { get; set; }
    }
}
