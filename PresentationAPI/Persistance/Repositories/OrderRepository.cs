using Application.Interfaces;
using Domain.Entities;
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
    }
}
