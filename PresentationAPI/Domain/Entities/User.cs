using Domain.Entities.Common;

namespace Domain.Entities
{
    public class User : BaseEntity
    {
        public string? Name { get; set; }
        public string? IdNumber { get; set; }
        public string? Email { get; set; }
        public bool? IsAdmin { get; set; }
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordSalt { get; set; }

    }
}
