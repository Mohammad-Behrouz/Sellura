namespace Sellura.Datalayer.Entities.WorkPlace;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Store
{
    public Store()
    {
        
    }
    [Key]
    [Display(Name = "شناسه فروشگاه")]
    public int StoreID { get; set; }

    [Display(Name = "نام فروشگاه")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string StoreName { get; set; }

    [Display(Name = "آدرس فروشگاه")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public string Address { get; set;}

    [Display(Name = "تاریخ ثبت فروشگاه")]
    public DateTime CreatedDate { get; set; }
}
