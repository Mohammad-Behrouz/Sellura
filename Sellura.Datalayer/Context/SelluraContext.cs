using Microsoft.EntityFrameworkCore;
using Sellura.Datalayer.Entities.Customer;
using Sellura.Datalayer.Entities.Employee;
using Sellura.Datalayer.Entities.Message;
using Sellura.Datalayer.Entities.Product;
using Sellura.Datalayer.Entities.SystemLog;
using Sellura.Datalayer.Entities.WorkPlace;

namespace Sellura.Datalayer.Context;

public class SelluraContext : DbContext
{
    public SelluraContext(DbContextOptions<SelluraContext> options) : base(options)
    {

    }

    #region Customer

    public DbSet<Customer> Customers { get; set; }

    #endregion

    #region Employee

    public DbSet<Supplier> Suppliers { get; set; }
    public DbSet<Employee> Employees { get; set; }

    #endregion


    #region Message

    public DbSet<Message> Messages { get; set; }

    #endregion

    #region Product

    public DbSet<Batch> Batches { get; set; }
    public DbSet<Category> Categories { get; set; }
    public DbSet<DeliveryNote> DeliveryNotes { get; set; }
    public DbSet<Invoice> Invoices { get; set; }
    public DbSet<InvoiceItem> InvoiceItems { get; set; }
    public DbSet<Product> Products { get; set; }
    public DbSet<ReturnedProduct> ReturnedProducts { get; set; }
    public DbSet<Shelf> Shelves { get; set; }
    public DbSet<ShelfItem> ShelfItems { get; set; }

    #endregion

    #region System Log

    public DbSet<SystemLog> SystemLogs { get; set; }

    #endregion

    #region WorkPlace

    public DbSet<Car> Cars { get; set; }
    public DbSet<Store> Stores { get; set; }
    public DbSet<Warehouse> Warehouses { get; set; }

    #endregion

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<ShelfItem>()
            .HasKey(si => new { si.BatchId, si.ShelfId });

        modelBuilder.Entity<InvoiceItem>()
            .HasKey(ii => new { ii.BatchId, ii.InvoiceId });

        modelBuilder.Entity<ShelfItem>()
            .HasOne(si => si.Shelf)
            .WithMany(s => s.ShelfItems)
            .HasForeignKey(si => si.ShelfId)
            .OnDelete(DeleteBehavior.Restrict);  

    }

}