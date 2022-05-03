using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistance.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Meals",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Price = table.Column<double>(type: "float", nullable: true),
                    ImageData = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Meals", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Menus",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Day = table.Column<DateTime>(type: "datetime2", nullable: false),
                    MealId1 = table.Column<bool>(type: "bit", nullable: false),
                    MealId2 = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Menus", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdNumber = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Meals",
                columns: new[] { "Id", "ImageData", "Name", "Price" },
                values: new object[,]
                {
                    { 1, null, "Cartofi Prajiti", 4.0 },
                    { 2, null, "Orez", 4.25 }
                });

            migrationBuilder.InsertData(
                table: "Menus",
                columns: new[] { "Id", "Day", "MealId1", "MealId2" },
                values: new object[,]
                {
                    { 1, new DateTime(2022, 5, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), true, false },
                    { 2, new DateTime(2022, 5, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), false, true }
                });

            migrationBuilder.InsertData(
                table: "Students",
                columns: new[] { "Id", "Email", "IdNumber", "Name" },
                values: new object[,]
                {
                    { 1, "olga.culeac@student.upt.ro", "lm-12314", "Olga Culeac" },
                    { 2, "banana.banan@gmail.com", "lm-12312S", "Banana banana" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Students_IdNumber",
                table: "Students",
                column: "IdNumber",
                unique: true,
                filter: "[IdNumber] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Meals");

            migrationBuilder.DropTable(
                name: "Menus");

            migrationBuilder.DropTable(
                name: "Students");
        }
    }
}
