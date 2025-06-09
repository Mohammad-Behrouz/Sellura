namespace Sellura.Datalayer.Entities.Product;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class InvoiceItem
{
    [Key, Column(Order = 0)]
    [Display(Name = "شناسه فاکتور")]
    public int InvoiceId { get; set; }

    [Key, Column(Order = 1)]
    [Display(Name = "شناسه سری ساخت")]
    public int BatchId { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "تعداد")]
    public int Quantity { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "قیمت واحد")]
    [Column(TypeName = "decimal(18,2)")]
    public decimal UnitPrice { get; set; }

    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Display(Name = "قیمت کل")]
    [Column(TypeName = "decimal(18,2)")]
    public decimal TotalPrice { get; set; }

    [ForeignKey(nameof(InvoiceId))]
    public Invoice Invoice { get; set; } = null!;

    [ForeignKey(nameof(BatchId))]
    public Batch Batch { get; set; } = null!;
}