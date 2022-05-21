using Application.DTOs.EntityDTOs.MenuDto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Menus.Commands.UpdateMeniu
{
    public class UpdateMenuOnSpecificDayCommand : IRequest<Unit>
    {
        public UpdateMenuOnSpecifcDayDto UpdateMenuOnSpecifcDay { get; set; }
        public DateTime Date { get; set; }
    }
}
