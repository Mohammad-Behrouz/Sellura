namespace Sellura.Datalayer.Entities.Employee;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Supplier
{
    [Key]
    [Display(Name = "شناسه تأمین‌کننده")]
    public int SupplierId { get; set; }

    [Display(Name = "نام تأمین‌کننده")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string Name { get; set; } 

    [Display(Name = "نام کاربری")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(50, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string Username { get; set; } 

    [Display(Name = "رمز عبور")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(255, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    [RegularExpression(@"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$", ErrorMessage = "{0} باید حداقل ۸ کاراکتر، شامل حرف و عدد باشد")]
    public string Password { get; set; } 

    [Display(Name = "شماره تماس")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(15, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    [RegularExpression(@"^09\d{9}$", ErrorMessage = "{0} باید با 09 شروع شده و 11 رقم باشد")]
    public string Phone { get; set; }

    [Display(Name = "ایمیل")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(50, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    [EmailAddress(ErrorMessage = "{0} وارد شده معتبر نیست")]
    public string Email { get; set; }

    [Display(Name = "کد فعال‌سازی")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(50, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string ActiveCode { get; set; } 

    [Display(Name = "آواتار")]
    [MaxLength(50, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string? Avatar { get; set; }

    [Display(Name = "وضعیت")]
    [Required(ErrorMessage = "لطفا وضعیت {0} را مشخص کنید")]
    public bool IsActive { get; set; }

    [Display(Name = "آدرس محل فعالیت")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(255, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string Address { get; set; }

    [Display(Name = "تاریخ ایجاد")]
    public DateTime CreatedDate { get; set; }
}
