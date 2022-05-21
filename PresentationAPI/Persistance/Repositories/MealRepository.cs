using Application.Interfaces;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Repositories
{
    internal class MealRepository : BaseRepository<Meal>, IMealRepository
    {
        private ApplicationContext _context;
        public MealRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
