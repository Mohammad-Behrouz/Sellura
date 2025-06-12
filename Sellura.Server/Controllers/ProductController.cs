using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sellura.Datalayer.Context;
using Sellura.Datalayer.DTOs;

using Sellura.Datalayer.Entities.Product;
using Sellura.Datalayer.Entities.WorkPlace;

namespace Sellura.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly SelluraContext _context;
        public ProductController(SelluraContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> get()
        {
            try
            {
                var res = await _context.Products.ToListAsync();
                return Ok(res);
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest(ex.Message);
            }
        }
        [HttpPost]
        public async Task<IActionResult> add([FromForm] AddProduct product)
        {
            var Product = await _context.Products.FirstOrDefaultAsync(x => x.Code == product.Code);
            if (Product != null)
            {
                return BadRequest(new { message = "کالا تکراری است" });
            }
            var newProduct = new Product
            {
                Name = product.Name,
                Code = product.Code,
                CategoryID = 1,
                MeasurementUnit = product.MeasurementUnit.ToString(),
                ProductImagePath = "0",
                MinimumStock = product.MinimumStuck,
                Weight = product.Weight,
                Offer = product.Offer,
                CreatedDate = DateTime.Now
            };

            try
            {
                await _context.Products.AddAsync(newProduct);
                await _context.SaveChangesAsync();

                return Ok();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return BadRequest(new { message = "ذخیره سازی به مشکل خورد !" });
            }

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return BadRequest("محصول یافت نشد");
            }
            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return Ok(new { message = "اوکی شد" });

        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Edit(int id, [FromForm] AddProduct updatedProduct)
        {
            var existingProduct = await _context.Products.FindAsync(id);
            if (existingProduct == null)
            {
                return NotFound(new { message = "محصول یافت نشد" });
            }

            existingProduct.Name = updatedProduct.Name;
            existingProduct.Code = updatedProduct.Code;
            existingProduct.MeasurementUnit = updatedProduct.MeasurementUnit.ToString();
            existingProduct.MinimumStock = updatedProduct.MinimumStuck;
            existingProduct.Weight = updatedProduct.Weight;
            existingProduct.Offer = updatedProduct.Offer;
           

            try
            {
                await _context.SaveChangesAsync();
                return Ok(new { message = "ویرایش با موفقیت انجام شد", product = existingProduct });
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
                return BadRequest(new { message = "خطا در ذخیره‌سازی اطلاعات" });
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> getInfo(int id)
        {
            var person = await _context.Products.FindAsync(id);
            if (person == null)
            {
                return NotFound(new { message = "پیدا نشد" });
            }

            return Ok(person);

        }
       
    }
}