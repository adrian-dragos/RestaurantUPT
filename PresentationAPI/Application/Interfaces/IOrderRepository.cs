﻿using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IOrderRepository : IBaseRepository<Order>
    {
        Task<IEnumerable<Order>> GetOrdersFromBasket(int StudentId);
    }
}
