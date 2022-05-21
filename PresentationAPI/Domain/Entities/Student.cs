using Domain.Entities.Common;

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
