using Application.DTOs.EntityDTOs.MenuDto;
using Application.Interfaces;
using AutoMapper;
using Domain.Entities;
using MediatR;

namespace Application.Features.Menus.Commands.AddMeniu
{
    public class CreateMenuOnSpecificDayCommandHandler : IRequestHandler<CreateMenuOnSpecificDayCommand, MenuDto>
    {
        private readonly IMapper _mapper;
        private readonly IMenuRepository _repository;

        public CreateMenuOnSpecificDayCommandHandler(IMapper mapper, IMenuRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<MenuDto> Handle(CreateMenuOnSpecificDayCommand command, CancellationToken cancellationToken)
        {
            if (command.Date <= DateTime.Today.AddDays(-1))
            {
                return default;
            }

            var menu = _mapper.Map<Menu>(command.CreateMenuOnSpecifcDay);
            menu.Day = command.Date;
            var existingMenu =
                await _repository
                .Find(x => x.Day.Day == command.Date.Day
                    && x.Day.Month == command.Date.Month
                    && x.Day.Year == command.Date.Year);

            if (existingMenu.Any())
            {
                return default;
            }

            menu.Day = command.Date;
            var createdMenu = await _repository.AddAsync(menu);
            await _repository.SaveAsync();
            return _mapper.Map<MenuDto>(createdMenu);
        }
    }
}
