using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace proiectLaII.Migrations
{
    public partial class nullablebrand : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Baskets_Products_Productsid",
                table: "Baskets");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Brands_Brandid",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "id",
                table: "Products",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "Productsid",
                table: "Baskets",
                newName: "ProductsId");

            migrationBuilder.RenameIndex(
                name: "IX_Baskets_Productsid",
                table: "Baskets",
                newName: "IX_Baskets_ProductsId");

            migrationBuilder.AlterColumn<int>(
                name: "Brandid",
                table: "Products",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Baskets_Products_ProductsId",
                table: "Baskets",
                column: "ProductsId",
                principalTable: "Products",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Brands_Brandid",
                table: "Products",
                column: "Brandid",
                principalTable: "Brands",
                principalColumn: "id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Baskets_Products_ProductsId",
                table: "Baskets");

            migrationBuilder.DropForeignKey(
                name: "FK_Products_Brands_Brandid",
                table: "Products");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Products",
                newName: "id");

            migrationBuilder.RenameColumn(
                name: "ProductsId",
                table: "Baskets",
                newName: "Productsid");

            migrationBuilder.RenameIndex(
                name: "IX_Baskets_ProductsId",
                table: "Baskets",
                newName: "IX_Baskets_Productsid");

            migrationBuilder.AlterColumn<int>(
                name: "Brandid",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Baskets_Products_Productsid",
                table: "Baskets",
                column: "Productsid",
                principalTable: "Products",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Products_Brands_Brandid",
                table: "Products",
                column: "Brandid",
                principalTable: "Brands",
                principalColumn: "id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
