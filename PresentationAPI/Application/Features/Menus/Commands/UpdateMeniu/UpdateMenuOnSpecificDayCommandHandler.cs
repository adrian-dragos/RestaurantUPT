using Application.DTOs.EntityDTOs.MenuDto;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Menus.Commands.UpdateMeniu
{
    public class UpdateMenuOnSpecificDayCommandHandler : IRequestHandler<UpdateMenuOnSpecificDayCommand, Unit>
    {
        private readonly IMapper _mapper;
        private readonly IMenuRepository _repository;

        public UpdateMenuOnSpecificDayCommandHandler(IMapper mapper, IMenuRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<Unit> Handle(UpdateMenuOnSpecificDayCommand command, CancellationToken cancellationToken)
        {
            var commandDate = new DateTime(command.Date.Year, command.Date.Month, command.Date.Day);
            if (commandDate < DateTime.Today)
            {
                return default;
            }

            var menu = _mapper.Map<Menu>(command.UpdateMenuOnSpecifcDay);
            await _repository.Update(menu);
            await _repository.SaveAsync();
            return Unit.Value;
        }
    }
}
