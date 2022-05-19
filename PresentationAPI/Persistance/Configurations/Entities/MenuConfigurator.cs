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
    public class MenuConfigurator : IEntityTypeConfiguration<Menu>
    {
        public void Configure(EntityTypeBuilder<Menu> builder)
        {
            builder.HasData(
                new Menu
                {
                    Id = 1,
                    Day = new DateTime(2022, 05, 9),
                    MealId1 = true,
                    MealId3 = true,
                    MealId4 = true,

                },
                  new Menu
                  {
                      Id = 2,
                      Day = new DateTime(2022, 05, 9),
                      MealId2 = true,
                      MealId5 = true,
                      MealId7 = true,
                  }
              );
        }
    }
}
