using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Sellura.Datalayer.Migrations
{
    /// <inheritdoc />
    public partial class wareHouseEdits : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "City",
                table: "Warehouses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Manager",
                table: "Warehouses",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Phone",
                table: "Warehouses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Situation",
                table: "Warehouses",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "City",
                table: "Warehouses");

            migrationBuilder.DropColumn(
                name: "Manager",
                table: "Warehouses");

            migrationBuilder.DropColumn(
                name: "Phone",
                table: "Warehouses");

            migrationBuilder.DropColumn(
                name: "Situation",
                table: "Warehouses");
        }
    }
}
