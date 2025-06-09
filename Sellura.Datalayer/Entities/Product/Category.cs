namespace Sellura.Datalayer.Entities.Product;

using System.ComponentModel.DataAnnotations;

public class Category
{
    public Category()
    {
        
    }
    [Key]
    [Display(Name = "شناسه دسته‌بندی")]
    public int CategoryId { get; set; }

    [Display(Name = "نام دسته‌بندی")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(100, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string Name { get; set; } = null!;

    [Display(Name = "آیکون دسته‌بندی")]
    [Required(ErrorMessage = "لطفا {0} را مشخص کنید")]
    [MaxLength(100, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string AvatarIcon { get; set; } = null!;

    [Display(Name = "تاریخ ثبت")]
    public DateTime CreatedDate { get; set; }
}
