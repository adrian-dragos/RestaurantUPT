using Application.DTOs.CommonDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.DTOs.EntityDTOs.UserDto
{
    public class UserDto : BaseEntityDto
    {
        public string? Name { get; set; }
        public string? Email { get; set; }
    }
}
