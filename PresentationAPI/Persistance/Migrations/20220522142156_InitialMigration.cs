using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistance.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.CreateTable(
            //    name: "Menus",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Day = table.Column<DateTime>(type: "datetime2", nullable: false),
            //        MealId1 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId2 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId3 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId4 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId5 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId6 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId7 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId8 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId9 = table.Column<bool>(type: "bit", nullable: true),
            //        MealId10 = table.Column<bool>(type: "bit", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Menus", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Orders",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        MealId = table.Column<int>(type: "int", nullable: true),
            //        StudentId = table.Column<int>(type: "int", nullable: true),
            //        Quantity = table.Column<int>(type: "int", nullable: true),
            //        TotalPrice = table.Column<double>(type: "float", nullable: true),
            //        DateOfDelivery = table.Column<DateTime>(type: "datetime2", nullable: true),
            //        Status = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Orders", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Students",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        IdNumber = table.Column<string>(type: "nvarchar(450)", nullable: true),
            //        Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Students", x => x.Id);
            //    });

            //migrationBuilder.CreateTable(
            //    name: "Meals",
            //    columns: table => new
            //    {
            //        Id = table.Column<int>(type: "int", nullable: false)
            //            .Annotation("SqlServer:Identity", "1, 1"),
            //        Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
            //        Price = table.Column<double>(type: "float", nullable: false),
            //        ImageData = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
            //        OrderId = table.Column<int>(type: "int", nullable: true)
            //    },
            //    constraints: table =>
            //    {
            //        table.PrimaryKey("PK_Meals", x => x.Id);
            //        table.ForeignKey(
            //            name: "FK_Meals_Orders_OrderId",
            //            column: x => x.OrderId,
            //            principalTable: "Orders",
            //            principalColumn: "Id");
            //    });

            //migrationBuilder.InsertData(
            //    table: "Meals",
            //    columns: new[] { "Id", "ImageData", "Name", "OrderId", "Price" },
            //    values: new object[,]
            //    {
            //        { 1, null, "Cartofi Prajiti", null, 4.0 },
            //        { 2, null, "Orez", null, 4.25 },
            //        { 3, null, "Piept de pui", null, 4.0 },
            //        { 4, null, "Cotlet de porc", null, 4.0 },
            //        { 5, null, "Pula de pui dezosata", null, 4.25 },
            //        { 6, null, "Supa de pui", null, 3.25 },
            //        { 7, null, "Supa de legume", null, 3.25 }
            //    });

            //migrationBuilder.InsertData(
            //    table: "Menus",
            //    columns: new[] { "Id", "Day", "MealId1", "MealId10", "MealId2", "MealId3", "MealId4", "MealId5", "MealId6", "MealId7", "MealId8", "MealId9" },
            //    values: new object[,]
            //    {
            //        { 1, new DateTime(2022, 5, 21, 17, 21, 55, 793, DateTimeKind.Local).AddTicks(6542), true, false, false, true, true, false, false, false, false, false },
            //        { 2, new DateTime(2022, 5, 22, 17, 21, 55, 793, DateTimeKind.Local).AddTicks(6581), false, false, true, false, false, true, false, true, false, false }
            //    });

            //migrationBuilder.InsertData(
            //    table: "Orders",
            //    columns: new[] { "Id", "DateOfDelivery", "MealId", "Quantity", "Status", "StudentId", "TotalPrice" },
            //    values: new object[,]
            //    {
            //        { 1, new DateTime(2022, 5, 21, 17, 21, 55, 793, DateTimeKind.Local).AddTicks(6699), 2, 1, 2, 1, 4.25 },
            //        { 2, new DateTime(2022, 5, 22, 17, 21, 55, 793, DateTimeKind.Local).AddTicks(6704), 1, 2, 0, 1, 8.0 }
            //    });

            //migrationBuilder.InsertData(
            //    table: "Students",
            //    columns: new[] { "Id", "Email", "IdNumber", "Name" },
            //    values: new object[,]
            //    {
            //        { 1, "olga.culeac@student.upt.ro", "lm-12314", "Olga Culeac" },
            //        { 2, "banana.banan@gmail.com", "lm-12312S", "Banana banana" }
            //    });

            //migrationBuilder.CreateIndex(
            //    name: "IX_Meals_OrderId",
            //    table: "Meals",
            //    column: "OrderId");

            //migrationBuilder.CreateIndex(
            //    name: "IX_Students_IdNumber",
            //    table: "Students",
            //    column: "IdNumber",
            //    unique: true,
            //    filter: "[IdNumber] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            //migrationBuilder.DropTable(
            //    name: "Meals");

            //migrationBuilder.DropTable(
            //    name: "Menus");

            //migrationBuilder.DropTable(
            //    name: "Students");

            //migrationBuilder.DropTable(
            //    name: "Orders");
        }
    }
}
