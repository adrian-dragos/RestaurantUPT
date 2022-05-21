using Application.Interfaces;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Repositories
{
    public class MenuRepository : BaseRepository<Menu>, IMenuRepository
    {
        private ApplicationContext _context;
        public MenuRepository(ApplicationContext context) : base(context)
        {
        }
    }
}
