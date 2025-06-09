using System.ComponentModel.DataAnnotations;

namespace Sellura.Datalayer.Entities.SystemLog;

public class SystemLog
{
    [Key]
    public int LogId { get; set; }

    [Required]
    public int ActorId { get; set; } // شناسه بازیگر عملیات (کارمند، مشتری، یا تأمین‌کننده)

    [Required]
    [StringLength(20)]
    public string ActorType { get; set; } // نوع بازیگر (Employee, Supplier, Customer)

    [Required]
    [StringLength(50)]
    public string ActionType { get; set; }

    [Required]
    [StringLength(100)]
    public string TargetTable { get; set; }

    public int? TargetId { get; set; }

    public string? Description { get; set; }

    [Required]
    public DateTime ActionDate { get; set; }

    [Required]
    public TimeSpan ActionTime { get; set; }

    [StringLength(45)]
    public string? IPAddress { get; set; }
}
