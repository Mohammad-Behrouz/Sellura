namespace Sellura.Datalayer.Entities.Product;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Shelf
{
    [Key]
    [Display(Name = "شناسه قفسه")]
    public int ShelfId { get; set; }

    [Display(Name = "شناسه محل قرارگیری")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public int WorkplaceId { get; set; }


    [Display(Name = "دسته‌بندی کالا")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    public int CategoryId { get; set; }

    [ForeignKey("CategoryId")]
    public Category? Category { get; set; }

    [Display(Name = "تعداد ردیف قفسه")]
    [Required(ErrorMessage = "لطفا {0} را وارد کنید")]
    [Range(1, int.MaxValue, ErrorMessage = "{0} باید حداقل 1 باشد")]
    public int RowOfShelf { get; set; }

    [Display(Name = "فعال بودن")]
    [Required(ErrorMessage = "لطفا {0} را مشخص کنید")]
    public bool IsActive { get; set; }

    [Display(Name = "تاریخ ایجاد")]
    public DateTime CreatedDate { get; set; }


    public ICollection<ShelfItem>? ShelfItems { get; set; }
}
