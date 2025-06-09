namespace Sellura.Datalayer.Entities.WorkPlace;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Warehouse
{
    public Warehouse()
    {
        
    }
    [Key]
    [Display(Name = "شناسه انبار")]
    public int WarehouseID { get; set; }

    [Display(Name = "نام انبار")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string Name { get; set; } 

    [Display(Name = "آدرس انبار")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string Address { get; set; }

    [Display(Name = "ظرفیت انبار (کیلوگرم)")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Range(1, int.MaxValue, ErrorMessage = " {0} باید عددی بزرگ‌تر از صفر باشد")]
    public int Capacity { get; set; }

    [Display(Name = "تاریخ ثبت انبار")]
    public DateTime CreatedDate { get; set; }
}
