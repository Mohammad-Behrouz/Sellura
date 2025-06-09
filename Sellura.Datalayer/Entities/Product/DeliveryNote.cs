namespace Sellura.Datalayer.Entities.Product;

using Sellura.Datalayer.Entities.WorkPlace;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class DeliveryNote
{
    [Key]
    [Display(Name = "شناسه بارنامه")]
    public int DeliveryNoteId { get; set; }

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "شناسه ماشین")]
    public int CarId { get; set; }

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "نوع مبدا")]
    public string OriginType { get; set; } = null!;

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "شناسه مبدا")]
    public int OriginId { get; set; }

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "نوع مقصد")]
    public string DestinationType { get; set; } = null!;

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "شناسه مقصد")]
    public int DestinationId { get; set; }

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "تاریخ تحویل به راننده")]
    public DateTime DriverReceiptDate { get; set; }

    [Display(Name = "تاریخ تحویل به مقصد")]
    public DateTime? DriverDeliveryDate { get; set; }

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "شناسه فاکتور")]
    public int InvoiceId { get; set; }

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "وضعیت بارنامه")]
    public string DeliveryNoteStatus { get; set; } = null!; // Approved, Pending, Rejected

    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Display(Name = "نوع انتقال")]
    public string InputOrTransfer { get; set; } = null!; // IN / TRANSFER

    // 🔗 Navigation Properties
    public virtual Invoice? Invoice { get; set; }

    public virtual Car? Car { get; set; }
}