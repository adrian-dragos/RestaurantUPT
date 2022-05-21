using Domain.Entities.Common;
using Domain.Enums;

namespace Domain.Entities
{
    public class Order : BaseEntity
    {
        public int? MealId { get; set; }
        public int? StudentId { get; set; }
        public int? Quantity { get; set; }
        public double? TotalPrice { get; set; }
        public DateTime? DateOfDelivery { get; set; }
        public OrderStatus? Status { get; set; }

        public ICollection<Meal>? Meals { get; set; }
    }
}
