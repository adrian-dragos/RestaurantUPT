﻿using Application.DTOs.EntityDTOs;
using Application.Interfaces;
using AutoMapper;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Features.Menu.Queries
{
    public class GetMenuListQueryHandler : IRequestHandler<GetMenuListQuery, IEnumerable<MenuDto>>
    {
        private readonly IMapper _mapper;
        private readonly IBaseRepository<Domain.Entities.Menu> _repository;

        public GetMenuListQueryHandler(IMapper mapper, IBaseRepository<Domain.Entities.Menu> repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task<IEnumerable<MenuDto>> Handle(GetMenuListQuery request, CancellationToken cancellationToken)
        {
            var menuList = await _repository.GetAll();
            return _mapper.Map<List<MenuDto>>(menuList);
        }
    }
}