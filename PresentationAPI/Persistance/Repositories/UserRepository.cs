using Application.Interfaces;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Repositories
{
    public class UserRepository : BaseRepository<User>, IUserRepository
    {
        private ApplicationContext _context;
        public UserRepository(ApplicationContext context) : base(context)
        {

        }
    }
}
