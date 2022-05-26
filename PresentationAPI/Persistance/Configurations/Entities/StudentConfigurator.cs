using Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Configurations.Entities
{
    public class StudentConfigurator : IEntityTypeConfiguration<User>
    {
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.HasData(
                new User
                {
                    Id = 1,
                    Name = "Olga Culeac",
                    IdNumber = "lm-12314",
                    Email = "olga.culeac@student.upt.ro"
                },
                new User
                {
                    Id = 2,
                    Name = "Banana banana",
                    IdNumber = "lm-12312S",
                    Email = "banana.banan@student.upt.ro"
                }
            );
        }
    }
}
