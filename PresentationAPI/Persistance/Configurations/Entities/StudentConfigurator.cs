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
    public class StudentConfigurator : IEntityTypeConfiguration<Student>
    {
        public void Configure(EntityTypeBuilder<Student> builder)
        {
            builder.HasData(
                new Student
                {
                    Id = 1,
                    Name = "Olga Culeac",
                    IdNumber = "lm-12314",
                    Email = "olga.culeac@student.upt.ro"
                },
                new Student
                {
                    Id = 2,
                    Name = "Banana banana",
                    IdNumber = "lm-12312S",
                    Email = "banana.banan@gmail.com"
                }
            );
        }
    }
}
