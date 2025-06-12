using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sellura.Datalayer.Context;
using Sellura.Datalayer.Entities.WorkPlace;
using Sellura.Server.DTOs;

namespace Sellura.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class    WareHouseController : ControllerBase
    {
        private readonly SelluraContext _context;

        public WareHouseController(SelluraContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> add([FromForm] WareHouseDTO warehouse)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    var newWareHouse = new Warehouse
                    {
                        Name = warehouse.Name,
                        Address = warehouse.Address,
                        Capacity = warehouse.Capacity,
                        Manager = warehouse.Manager,
                        Phone = warehouse.Phone,
                        City = warehouse.City,
                        CreatedDate = DateTime.Now,
                        Situation = "فعال"
                    };

                    _context.Warehouses.Add(newWareHouse);
                    await _context.SaveChangesAsync();

                    return Ok(new { message = "موفق" });
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.ToString());
                    return BadRequest(new { message = "خطای سمت سرور" });
                }

            }
            else
            {
                Console.WriteLine("مدل استیت");
                return BadRequest(new { message = "مدل استیت" });
            }
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> get(int id)
        {
            try
            {
                var wareHouse = await _context.Warehouses.FindAsync(id);
                if (wareHouse == null) return BadRequest(new { message = "پیدا نشد" });

                return Ok(wareHouse);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "خطای سرور" });

            }
        }
        [HttpGet]
        public async Task<IActionResult> getAll()
        {
            try
            {
                var wareHouses = await _context.Warehouses.ToListAsync();
                if (wareHouses == null) return BadRequest(new { message = "دیتا بیس خالیه" });

                return Ok(wareHouses);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = "خطای سرور" });

            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> edit(int id, [FromForm] WareHouseDTO newWarehouse)
        {
            var wareHouse = await _context.Warehouses.FindAsync(id);
            if (wareHouse == null) return BadRequest(new { message = "پیدا نشد" });

            wareHouse.Capacity = newWarehouse.Capacity;
            wareHouse.Address = newWarehouse.Address;
            wareHouse.Name = newWarehouse.Name;
            wareHouse.Manager = newWarehouse.Manager;
            wareHouse.Situation = newWarehouse.Situation;
            wareHouse.Phone = newWarehouse.Phone;
            try
            {
                await _context.SaveChangesAsync();
                return Ok(new { message = "موفق" });
            }
            catch
            {
                return BadRequest(new { message = "خطای سرور" });
            }

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> delete(int id)
        {
            var wareHouse = await _context.Warehouses.FindAsync(id);
            if (wareHouse == null) { Console.WriteLine("یافت نشد");
                    return BadRequest(new { message = "یافت نشد" });
            }

            try
            {
                _context.Warehouses.Remove(wareHouse);
                await _context.SaveChangesAsync();

                return Ok(new { message = "موفق" });
            }
            catch (Exception ex)
            {

                Console.WriteLine(ex);
                return BadRequest(new { message = "خطای سرور" });

            }


        }
    }

}

