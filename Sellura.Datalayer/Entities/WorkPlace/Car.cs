namespace Sellura.Datalayer.Entities.WorkPlace;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


public class Car
{
    public Car()
    {
        
    }
    [Key]
    [Display(Name = "شناسه خودرو")]
    public int CarID { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(20, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    [RegularExpression(@"^\d{2}[آ-ی]\d{3}\d{2}$", ErrorMessage = "{0} باید شامل دو رقم، یک حرف فارسی، سه رقم و دو رقم پایانی باشد (مثلاً: 12الف34567)")]
    [Display(Name = "شماره پلاک")]
    public string CarPlaque { get; set; }


    [Required(ErrorMessage = "لطفا {0} را مشخص کنید")]
    [Display(Name = "راننده")]
    public int EmployeeID { get; set; }

    [ForeignKey("EmployeeID")]
    public Employee.Employee? Driver { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(100, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    [Display(Name = "نام خودرو")]
    public string CarName { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Range(1, int.MaxValue, ErrorMessage = "{0} باید عددی مثبت باشد")]
    [Display(Name = "ظرفیت حمل بار (کیلوگرم)")]
    public int Capacity { get; set; }
}
