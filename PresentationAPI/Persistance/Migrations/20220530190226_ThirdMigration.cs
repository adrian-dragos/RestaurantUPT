using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistance.Migrations
{
    public partial class ThirdMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ImageData",
                table: "Meals",
                type: "nvarchar(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageData",
                value: "https://www.thespruceeats.com/thmb/tXRCQhaBACOilf8tnzLhaW0uzbE=/3485x1960/smart/filters:no_upscale()/how-to-make-homemade-french-fries-2215971-hero-01-02f62a016f3e4aa4b41d0c27539885c3.jpg");

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageData",
                value: "https://thumbs.dreamstime.com/z/gohan-traditional-japanese-food-clear-rise-91343074.jpg");

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageData",
                value: "https://www.wholesomeyum.com/wp-content/uploads/2022/01/wholesomeyum-Baked-Chicken-Leg-Quarters-Recipe-9.jpg");

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageData",
                value: "https://www.e-retete.ro/files/recipes/cotlete-de-porc-la-tava.jpg");

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "ImageData", "Name" },
                values: new object[] { "https://www.saltandlavender.com/wp-content/uploads/2018/12/creamy-garlic-chicken-recipe-1.jpg", "Pulpa de pui dezosata" });

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 6,
                column: "ImageData",
                value: "https://3w12zw31w2dc3apx892l1b3a-wpengine.netdna-ssl.com/wp-content/uploads/2015/02/chicken-soup-one-dish-kitchen-square-1200.jpg");

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageData",
                value: "https://www.cookingclassy.com/wp-content/uploads/2014/10/vegetable-soup-7.jpg");

            migrationBuilder.UpdateData(
                table: "Menus",
                keyColumn: "Id",
                keyValue: 1,
                column: "Day",
                value: new DateTime(2022, 5, 29, 22, 2, 25, 878, DateTimeKind.Local).AddTicks(1565));

            migrationBuilder.UpdateData(
                table: "Menus",
                keyColumn: "Id",
                keyValue: 2,
                column: "Day",
                value: new DateTime(2022, 5, 30, 22, 2, 25, 878, DateTimeKind.Local).AddTicks(1628));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfDelivery",
                value: new DateTime(2022, 5, 29, 22, 2, 25, 878, DateTimeKind.Local).AddTicks(1855));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfDelivery",
                value: new DateTime(2022, 5, 30, 22, 2, 25, 878, DateTimeKind.Local).AddTicks(1865));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "ImageData",
                table: "Meals",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageData",
                value: null);

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageData",
                value: null);

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageData",
                value: null);

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageData",
                value: null);

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "ImageData", "Name" },
                values: new object[] { null, "Pula de pui dezosata" });

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 6,
                column: "ImageData",
                value: null);

            migrationBuilder.UpdateData(
                table: "Meals",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageData",
                value: null);

            migrationBuilder.UpdateData(
                table: "Menus",
                keyColumn: "Id",
                keyValue: 1,
                column: "Day",
                value: new DateTime(2022, 5, 24, 22, 20, 50, 671, DateTimeKind.Local).AddTicks(5191));

            migrationBuilder.UpdateData(
                table: "Menus",
                keyColumn: "Id",
                keyValue: 2,
                column: "Day",
                value: new DateTime(2022, 5, 25, 22, 20, 50, 671, DateTimeKind.Local).AddTicks(5235));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfDelivery",
                value: new DateTime(2022, 5, 24, 22, 20, 50, 671, DateTimeKind.Local).AddTicks(5347));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfDelivery",
                value: new DateTime(2022, 5, 25, 22, 20, 50, 671, DateTimeKind.Local).AddTicks(5354));
        }
    }
}
