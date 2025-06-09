namespace Sellura.Datalayer.Entities.Product;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Product
{
    public Product()
    {
        
    }
    [Key]
    [Display(Name = "شناسه کالا")]
    public int ProductID { get; set; }

    [Display(Name = "نام کالا")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(100, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string Name { get; set; } = null!;

    [Display(Name = "کد کالا")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(50, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string Code { get; set; } = null!;

    [Display(Name = "شناسه دسته‌بندی")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public int CategoryID { get; set; }

    [ForeignKey("CategoryID")]
    public Category? Category { get; set; }

    [Display(Name = "واحد اندازه‌گیری")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [MaxLength(50, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    public string MeasurementUnit { get; set; } = null!;

    [Display(Name = "تصویر کالا")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string ProductImagePath { get; set; } = null!;

    [Display(Name = "حداقل موجودی")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Range(0, int.MaxValue, ErrorMessage = "{0} نمی‌تواند منفی باشد")]
    public int MinimumStock { get; set; }

    [Display(Name = "وزن (کیلوگرم)")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Range(0.01, double.MaxValue, ErrorMessage = "{0} باید بیشتر از صفر باشد")]
    public float Weight { get; set; }

    [Display(Name = "درصد تخفیف")]
    [Range(0, 100, ErrorMessage = "{0} باید بین ۰ تا ۱۰۰ باشد")]
    public int? Offer { get; set; }

    [Display(Name = "تاریخ ثبت")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public DateTime CreatedDate { get; set; }
}
