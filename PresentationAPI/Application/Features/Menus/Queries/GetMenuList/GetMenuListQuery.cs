using Application.DTOs.EntityDTOs.MenuDto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Menus.Queries.GetMenuList
{
    public class GetMenuListQuery : IRequest<IEnumerable<MenuDto>>
    {
    }
}
