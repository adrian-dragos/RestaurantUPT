using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistance.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Students");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdNumber = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IsAdmin = table.Column<bool>(type: "bit", nullable: true),
                    PasswordHash = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PasswordSalt = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

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

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "IdNumber", "IsAdmin", "Name", "PasswordHash", "PasswordSalt" },
                values: new object[,]
                {
                    { 1, "olga.culeac@student.upt.ro", "lm-12314", null, "Olga Culeac", null, null },
                    { 2, "banana.banan@student.upt.ro", "lm-12312S", null, "Banana banana", null, null }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_IdNumber",
                table: "Users",
                column: "IdNumber",
                unique: true,
                filter: "[IdNumber] IS NOT NULL");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.CreateTable(
                name: "Students",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    IdNumber = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Students", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "Menus",
                keyColumn: "Id",
                keyValue: 1,
                column: "Day",
                value: new DateTime(2022, 5, 21, 17, 21, 55, 793, DateTimeKind.Local).AddTicks(6542));

            migrationBuilder.UpdateData(
                table: "Menus",
                keyColumn: "Id",
                keyValue: 2,
                column: "Day",
                value: new DateTime(2022, 5, 22, 17, 21, 55, 793, DateTimeKind.Local).AddTicks(6581));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 1,
                column: "DateOfDelivery",
                value: new DateTime(2022, 5, 21, 17, 21, 55, 793, DateTimeKind.Local).AddTicks(6699));

            migrationBuilder.UpdateData(
                table: "Orders",
                keyColumn: "Id",
                keyValue: 2,
                column: "DateOfDelivery",
                value: new DateTime(2022, 5, 22, 17, 21, 55, 793, DateTimeKind.Local).AddTicks(6704));

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
    }
}
