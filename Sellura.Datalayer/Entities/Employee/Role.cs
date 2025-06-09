namespace Sellura.Datalayer.Entities.Employee;
using System.ComponentModel.DataAnnotations;

public enum Role
{
    [Display(Name = "مدیر کلی مجموعه")]
    SystemAdmin = 1,

    [Display(Name = "مدیر انبار")]
    WarehouseManager = 2,

    [Display(Name = "اپراتور انبار")]
    WarehouseOperator = 3,

    [Display(Name = "قفسه‌دار انبار")]
    WarehouseShelfKeeper = 4,

    [Display(Name = "مدیر فروشگاه")]
    StoreManager = 5,

    [Display(Name = "قفسه‌دار فروشگاه")]
    StoreShelfKeeper = 6,

    [Display(Name = "صندوق‌دار فروشگاه")]
    Cashier = 7,

    [Display(Name = "تأمین‌کننده")]
    Supplier = 8,

    [Display(Name = "راننده")]
    Driver = 9
}