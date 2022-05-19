﻿using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Orders.Commands.DeleteOrderFromBasket
{
    public class DeleteOrderFromBasketCommand : IRequest<Unit>
    {
        public int Id { get; set; }
    }
}
