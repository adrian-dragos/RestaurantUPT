using Application.DTOs.EntityDTOs.MenuDto;
using Application.DTOs.EntityDTOs.OrderDto;
using Application.DTOs.EnumDTOs;
using AutoMapper;
using Domain.Entities;
using Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Configurations
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            #region Menu Mappings
            CreateMap<Menu, MenuDto>().ReverseMap();
            #endregion Menu Mappings

            #region Order Mappings
            CreateMap<Order, AddOrderToBasketDto>();
            CreateMap<Order, OrderDto>().ReverseMap();
            #endregion Order Mappings

            #region OrderStatus Mappings
            CreateMap<OrderStatus, OrderStatusDto>().ReverseMap();
            #endregion OrderStatusMappings
        }
    }
}

