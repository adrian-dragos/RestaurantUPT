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
                    Name = "Cartofi Prajiti",
                    ImageData = "https://www.thespruceeats.com/thmb/tXRCQhaBACOilf8tnzLhaW0uzbE=/3485x1960/smart/filters:no_upscale()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg"

                },
                new Meal
                {
                    Id = 2,
                    Price = 4.25,
                    Name = "Orez",
                    ImageData = "https://thumbs.dreamstime.com/z/gohan-traditional-japanese-food-clear-rise-91343074.jpg"
                },
                new Meal
                {
                    Id = 3,
                    Price = 4,
                    Name = "Piept de pui",
                    ImageData = "https://www.wholesomeyum.com/wp-content/uploads/2022/01/wholesomeyum-Baked-Chicken-Leg-Quarters-Recipe-9.jpg"
                },
                new Meal
                {
                    Id = 4,
                    Price = 4,
                    Name = "Cotlet de porc",
                    ImageData = "https://www.e-retete.ro/files/recipes/cotlete-de-porc-la-tava.jpg"
                },
                new Meal
                {
                    Id = 5,
                    Price = 4.25,
                    Name = "Pulpa de pui dezosata",
                    ImageData = "https://www.saltandlavender.com/wp-content/uploads/2018/12/creamy-garlic-chicken-recipe-1.jpg"
                },
                new Meal
                {
                    Id = 6,
                    Price = 3.25,
                    Name = "Supa de pui",
                    ImageData = "https://3w12zw31w2dc3apx892l1b3a-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/chicken-soup-one-dish-kitchen-square-1200.jpg"
                },
                new Meal
                {
                    Id = 7,
                    Price = 3.25,
                    Name = "Supa de legume",
                    ImageData = "https://www.cookingclassy.com/wp-content/uploads/2014/10/vegetable-soup-7.jpg"
                }
            ) ;
        }

    }
}
