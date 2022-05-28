using Application.DTOs.EntityDTOs.MenuDto;
using Application.Features.Menus.Commands.AddMeniu;
using Application.Features.Menus.Commands.UpdateMeniu;
using Application.Features.Menus.Queries.GetMenuList;
using Application.Features.Menus.Queries.GetMenuListOnSpecificDay;
using Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PresentationAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IMediator _mediator;

        public MenuController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Menu>>> GetMenuList()
        {
            var menu = await _mediator.Send(new GetMenuListQuery());
            return Ok(menu);
        }

        [HttpGet("date")]
        public async Task<ActionResult<List<Menu>>> GetMenuListByDate(DateTime date)
        {
            var menu = await _mediator.Send(new GetMenuListOnSpecificDayQuery { Date = date });
            return Ok(menu);
        }

        [Authorize]
        [HttpPost("date")]
        public async Task<ActionResult<List<Menu>>> CreateMenuForSpecificDay(DateTime date, CreateMenuOnSpecicDayDto menuDto)
        {
            var menu = await _mediator.Send(
                new CreateMenuOnSpecificDayCommand { 
                    CreateMenuOnSpecifcDay = menuDto, 
                    Date = date 
                });
            return Ok(menu);
        }

        [Authorize]
        [HttpPatch("date")]
        public async Task<ActionResult<List<Menu>>> UpdateMenuForSpecificDay(DateTime date, UpdateMenuOnSpecifcDayDto menuDto)
        {
            var menu = await _mediator.Send(
                new UpdateMenuOnSpecificDayCommand
                {
                    UpdateMenuOnSpecifcDay = menuDto,
                    Date = date
                });
            return Ok(menu);
        }
    }
}
