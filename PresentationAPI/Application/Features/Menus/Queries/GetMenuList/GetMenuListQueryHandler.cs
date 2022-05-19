using Application.DTOs.EntityDTOs.MenuDto;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Menus.Queries.GetMenuList
{
    public class GetMenuListQueryHandler : IRequestHandler<GetMenuListQuery, IEnumerable<MenuDto>>
    {
        private readonly IMapper _mapper;
        private readonly IMenuRepository _repository;

        public GetMenuListQueryHandler(IMapper mapper, IMenuRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<IEnumerable<MenuDto>> Handle(GetMenuListQuery query, CancellationToken cancellationToken)
        {
            var menuList = await _repository.GetAll();
            return _mapper.Map<List<MenuDto>>(menuList);
        }
    }
}
