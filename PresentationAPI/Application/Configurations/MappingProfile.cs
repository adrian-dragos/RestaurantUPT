using Application.DTOs.EntityDTOs.MealDto;
using Application.DTOs.EntityDTOs.MenuDto;
using Application.DTOs.EntityDTOs.OrderDto;
using Application.DTOs.EnumDTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;

namespace Application.Configurations
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Menu Mappings
            CreateMap<Menu, MenuDto>().ReverseMap();
            CreateMap<Menu, CreateMenuOnSpecicDayDto>().ReverseMap();
            CreateMap<Menu, UpdateMenuOnSpecifcDayDto>().ReverseMap();
            #endregion Menu Mappings

            #region Order Mappings
            CreateMap<AddOrderToBasketDto, Order>()
                .ForMember(x => x.Status, opt => opt.MapFrom(o => OrderStatus.InBasket));
            CreateMap<Order, OrderDto>().ReverseMap();
            CreateMap<Order, OrderedItemsDto>().ReverseMap();
            CreateMap<MakeOrderDto, Order>()
                .ForMember(x => x.Status, opt => opt.MapFrom(o => OrderStatus.InProgress));
            CreateMap<CompleteOrderDto, Order>()
                .ForMember(x => x.Status, opt => opt.MapFrom(o => OrderStatus.Done));
            #endregion Order Mappings

            #region OrderStatus Mappings
            CreateMap<OrderStatus, OrderStatusDto>().ReverseMap();
            #endregion OrderStatus Mappings

            #region Meal Mappings
            CreateMap<Meal, GetMealDto>().ReverseMap();
            CreateMap<Meal, MealDto>().ReverseMap();
            CreateMap<Meal, CreateMealDto>().ReverseMap();
            CreateMap<Meal, UpdateMealDto>().ReverseMap();
            #endregion Meal Mappings

        }
    }
}

