namespace Sellura.Datalayer.Entities.Message;

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

public class Message
{
    [Key]
    public int MessageId { get; set; }

    [Required(ErrorMessage = "عنوان پیام الزامی است.")]
    [StringLength(100, ErrorMessage = "عنوان پیام نمی‌تواند بیش از 100 کاراکتر باشد.")]
    public string Title { get; set; }

    [Required(ErrorMessage = "متن پیام الزامی است.")]
    public string Text { get; set; }

    [Required(ErrorMessage = "شناسه فرستنده الزامی است.")]
    [ForeignKey("Sender")]
    public int SenderId { get; set; }

    [Required(ErrorMessage = "شناسه گیرنده الزامی است.")]
    [ForeignKey("Receiver")]
    public int ResiverId { get; set; }

    [Required(ErrorMessage = "تاریخ ارسال الزامی است.")]
    public DateTime SentDate { get; set; }

    [Required(ErrorMessage = "وضعیت مشاهده پیام الزامی است.")]
    public bool Seen { get; set; }

}
