using Application.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistance.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Persistance
{
    public static class PersistanceService
    {
        public static IServiceCollection ConfigurePersistenceServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContextFactory<ApplicationContext>(options =>
                options.UseSqlServer(
                    configuration.GetConnectionString("DataBaseConnectionString")));

            services.
                AddScoped(typeof(IBaseRepository<>), typeof(BaseRepository<>))
                .AddScoped<IOrderRepository, OrderRepository>()
                .AddScoped<IMealRepository, MealRepository>()
                .AddScoped<IMenuRepository, MenuRepository>();
            return services;
        }
    }
}
