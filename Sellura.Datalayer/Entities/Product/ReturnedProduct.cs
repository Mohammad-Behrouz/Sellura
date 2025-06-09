namespace Sellura.Datalayer.Entities.Product;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class ReturnedProduct
{
    [Key]
    [Display(Name = "شناسه مرجوعی")]
    public int ReturnId { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "شناسه فاکتور")]
    public int InvoiceId { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "شناسه کالا")]
    public int ProductId { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "تعداد مرجوعی")]
    public int Quantity { get; set; }

    [MaxLength(255, ErrorMessage = "حداکثر {1} کاراکتر برای {0} مجاز است")]
    [Display(Name = "دلیل مرجوعی")]
    public string? Reason { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "تاریخ مرجوعی")]
    public DateTime DateReturned { get; set; }

    [ForeignKey(nameof(InvoiceId))]
    public Invoice Invoice { get; set; } = null!;

    [ForeignKey(nameof(ProductId))]
    public Product Product { get; set; } = null!;
}