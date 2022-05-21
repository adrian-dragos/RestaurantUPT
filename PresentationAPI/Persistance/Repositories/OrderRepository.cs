using Application.Interfaces;
using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Repositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        private ApplicationContext _context;
        public OrderRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<IEnumerable<Order>> GetOrdersFromBasket(int StudentId)
        {
            return await _context.Orders
                .Where(x => x.Id == StudentId)
                .ToListAsync();
        }
    }
}
