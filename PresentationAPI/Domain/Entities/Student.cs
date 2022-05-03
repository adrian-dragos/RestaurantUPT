using Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Student : BaseEntity
    {
        public string? Name { get; set; }
        public string? IdNumber { get; set; }
        public string? Email { get; set; }
        // TODO: password
    }
}
