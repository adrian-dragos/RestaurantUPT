using Application.DTOs.EntityDTOs.MenuDto;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Menus.Queries.GetMenuListOnSpecificDay
{
    public class GetMenuListOnSpecificDayQueryHandler : IRequestHandler<GetMenuListOnSpecificDayQuery, MenuDto>
    {

        private readonly IMapper _mapper;
        private readonly IMenuRepository _repository;

        public GetMenuListOnSpecificDayQueryHandler(IMapper mapper, IMenuRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }
        public async Task<MenuDto> Handle(GetMenuListOnSpecificDayQuery query, CancellationToken cancellationToken)
        {
            // TODO: make this work
            var menuList = await _repository.
                Find(x => x.Day.Day == query.Date.Day && 
                x.Day.Month == query.Date.Month && x.Day.Year == query.Date.Year);

            if (!menuList.Any())
            {
                return default;
            }
            return _mapper.Map<MenuDto>(menuList.First());
        }
    }
}
