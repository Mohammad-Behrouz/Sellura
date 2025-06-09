namespace Sellura.Datalayer.Entities.Product;

using Sellura.Datalayer.Entities.Employee;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Batch
{
    public Batch()
    {
        
    }
    [Key]
    [Display(Name = "شناسه سری ساخت")]
    public int BatchID { get; set; }

    [Display(Name = "شناسه کالا")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public int ProductId { get; set; }

    [ForeignKey("ProductId")]
    public Product? Product { get; set; }

    [Display(Name = "قیمت خرید")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Range(0.01, double.MaxValue, ErrorMessage = "{0} باید بیشتر از صفر باشد")]
    public decimal PurchasePrice { get; set; }

    [Display(Name = "قیمت فروش")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Range(0.01, double.MaxValue, ErrorMessage = "{0} باید بیشتر از صفر باشد")]
    public decimal SellingPrice { get; set; }

    [Display(Name = "موجودی سری ساخت")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Range(0, int.MaxValue, ErrorMessage = "{0} نمی‌تواند منفی باشد")]
    public int Stock { get; set; }

    [Display(Name = "تاریخ انقضا")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public DateTime ExpirationDate { get; set; }

    [Display(Name = " تأمین‌کننده")]
    [Required(ErrorMessage = "لطفا {0} را مشخص کنید")]
    public int SupplierID { get; set; }

    [ForeignKey("SupplierID")]
    public Supplier? Supplier { get; set; }

    [NotMapped]
    [Display(Name = "بارکد")]
    public string BarCode => $"{ProductId}{BatchID}";

    [Display(Name = "وضعیت")]
    [Required(ErrorMessage = "لطفا {0} را مشخص کنید")]
    public bool IsActive { get; set; }

    [Display(Name = "تاریخ ثبت")]
    public DateTime CreatedDate { get; set; }
}
