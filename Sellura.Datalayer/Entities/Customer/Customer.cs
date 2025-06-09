namespace Sellura.Datalayer.Entities.Customer;

using System.ComponentModel.DataAnnotations;

public class Customer
{
    [Key]
    public int CustomerId { get; set; }

    [Required(ErrorMessage = "نام مشتری الزامی است.")]
    [StringLength(100, ErrorMessage = "نام مشتری نمی‌تواند بیشتر از 100 کاراکتر باشد.")]
    public string Name { get; set; }

    [Required(ErrorMessage = "شماره تماس الزامی است.")]
    [RegularExpression(@"^09\d{9}$", ErrorMessage = "شماره تماس باید با 09 شروع شده و 11 رقم باشد.")]
    [StringLength(11, MinimumLength = 11, ErrorMessage = "شماره تماس باید 11 رقم باشد.")]
    public string Phone { get; set; }

    [EmailAddress(ErrorMessage = "فرمت ایمیل معتبر نیست.")]
    [StringLength(150, ErrorMessage = "ایمیل نمی‌تواند بیشتر از 150 کاراکتر باشد.")]
    public string Email { get; set; }
}
