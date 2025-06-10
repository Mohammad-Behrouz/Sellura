using System.ComponentModel.DataAnnotations;

namespace Sellura.Core.DOTs;

public class LoginViewModel
{
    [Display(Name = "نام کاربری")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string UserName { get; set; }

    [Display(Name = "رمز عبور")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string Password { get; set; }

    [Display(Name = "مرابخاطر بسپار")]
    public bool RememberMe { get; set; }
}
public class ForgotPasswordViewModel
{
    [Display(Name = "نام کاربری")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string UserName { get; set; }
}
public class ForgotUserNameViewModel
{
    [Display(Name = "شماره تلفن")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [RegularExpression(@"^09\d{9}$", ErrorMessage = "{0} باید با 09 شروع شده و 11 رقم باشد")]
    public string PhoneNumber { get; set; }
}