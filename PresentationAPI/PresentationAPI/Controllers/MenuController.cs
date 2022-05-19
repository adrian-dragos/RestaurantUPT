using Application.Features.Menus.Queries.GetMenuList;
using Application.Features.Menus.Queries.GetMenuListOnSpecificDay;
using Domain.Entities;
using MediatR;
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

    }
}
