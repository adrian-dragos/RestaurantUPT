using Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class Meal : BaseEntity
    {
        public string? Name { get; set; }
        public double Price { get; set; }
        public byte[]? ImageData { get; set; }
        public Order? Order { get; set; }
    }
}
