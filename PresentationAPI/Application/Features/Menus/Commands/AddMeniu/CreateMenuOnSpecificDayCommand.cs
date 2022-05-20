using Application.DTOs.EntityDTOs.MenuDto;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Menus.Commands.AddMeniu
{
    public class CreateMenuOnSpecificDayCommand : IRequest<MenuDto>
    {
        public CreateMenuOnSpecicDayDto? CreateMenuOnSpecifcDay { get; set; }
        public DateTime Date { get; set; }
    }
}
