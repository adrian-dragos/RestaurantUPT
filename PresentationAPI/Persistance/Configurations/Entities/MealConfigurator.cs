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
                },
                new Meal
                {
                    Id = 3,
                    Price = 4,
                    Name = "Piept de pui"
                },
                new Meal
                {
                    Id = 4,
                    Price = 4,
                    Name = "Cotlet de porc"
                },
                new Meal
                {
                    Id = 5,
                    Price = 4.25,
                    Name = "Pula de pui dezosata"
                },
                new Meal
                {
                    Id = 6,
                    Price = 3.25,
                    Name = "Supa de pui"
                },
                new Meal
                {
                    Id = 7,
                    Price = 3.25,
                    Name = "Supa de legume"
                }
            ) ;
        }

    }
}
