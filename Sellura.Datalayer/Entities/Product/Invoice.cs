namespace Sellura.Datalayer.Entities.Product;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Invoice
{
    [Key]
    [Display(Name = "شناسه فاکتور")]
    public int InvoiceId { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "نوع فروشنده")]
    public string SellerType { get; set; } = null!;

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "شناسه فروشنده")]
    public int SellerRefId { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "نوع خریدار")]
    public string BuyerType { get; set; } = null!;

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "شناسه خریدار")]
    public int BuyerRefId { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "تاریخ فاکتور")]
    public DateTime Date { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "جمع مبلغ کل")]
    public decimal TotalPrice { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "وضعیت فاکتور")]
    public string InvoiceStatus { get; set; } = null!; // مثلا Pending, Approved...

    [Display(Name = "تحویل داده شده؟")]
    public bool? IsDelivered { get; set; }

    [Display(Name = "ارجاع به فاکتور قبلی (در صورت مرجوعی)")]
    public int? ReturnedFromInvoiceId { get; set; }

    // 👉 Navigation properties
    [ForeignKey(nameof(ReturnedFromInvoiceId))]
    public Invoice? ReturnedFromInvoice { get; set; }

    public virtual ICollection<InvoiceItem> InvoiceItems { get; set; } = new List<InvoiceItem>();

    public virtual ICollection<ReturnedProduct> ReturnedProducts { get; set; } = new List<ReturnedProduct>();
}