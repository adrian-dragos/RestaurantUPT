using Application.DTOs.EntityDTOs;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Menu.Queries
{
    public class GetMenuListQuery : IRequest<IEnumerable<MenuDto>>
    {
    }
}
