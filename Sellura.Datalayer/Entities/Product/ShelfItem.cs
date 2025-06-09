namespace Sellura.Datalayer.Entities.Product;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class ShelfItem
{
    [Key, Column(Order = 0)]
    [Display(Name = "شناسه سری ساخت")]
    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    public int BatchId { get; set; }

    [ForeignKey("BatchId")]
    public Batch? Batch { get; set; }

    [Key, Column(Order = 1)]
    [Display(Name = "شناسه قفسه")]
    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    public int ShelfId { get; set; }

    [ForeignKey("ShelfId")]
    public Shelf? Shelf { get; set; }

    [Display(Name = "شماره ردیف در قفسه")]
    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Range(1, int.MaxValue, ErrorMessage = "{0} باید عددی مثبت باشد")]
    public int NumberOfRowInShelf { get; set; }

    [Display(Name = "تعداد کالا")]
    [Required(ErrorMessage = "لطفاً {0} را وارد کنید")]
    [Range(1, int.MaxValue, ErrorMessage = "{0} باید عددی مثبت باشد")]
    public int NumberOfProducts { get; set; }
}
