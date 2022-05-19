using Domain.Entities;
using Domain.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance.Configurations.Entities
{
    public class OrderConfigurator : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.HasData(
                new Order
                {
                    Id = 1,
                    MealId = 2,
                    StudentId = 1,
                    Quantity = 1,
                    TotalPrice = 4.25,
                    DateOfDelivery = DateTime.Now.AddDays(-1),
                    Status = OrderStatus.Ordered
                },
                new Order
                {
                    Id = 2,
                    MealId = 1,
                    StudentId = 1,
                    Quantity = 2,
                    TotalPrice = 8,
                    DateOfDelivery = DateTime.Now,
                    Status = OrderStatus.InBasket
                });
        }
    }
}
