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
    public class MealConfigurator : IEntityTypeConfiguration<Meal>
    {
        public void Configure(EntityTypeBuilder<Meal> builder)
        {
            builder.HasData(
                new Meal
                {
                    Id = 1,
                    Price = 4,
                    Name = "Cartofi Prajiti"

                },
                new Meal
                {
                    Id = 2,
                    Price = 4.25,
                    Name = "Orez"
                }
            ) ;
        }

    }
}
