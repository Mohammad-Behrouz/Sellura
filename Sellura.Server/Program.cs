using Microsoft.EntityFrameworkCore;
using Sellura.Datalayer.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

#region Add Services

builder.Services.AddControllersWithViews();

#endregion

#region Database Context

// Get current environment
var environment = builder.Environment;

string connectionString = environment.IsDevelopment()
    ? builder.Configuration.GetConnectionString("MyEShopConnection_Development")
    : builder.Configuration.GetConnectionString("MyEShopConnection_Production");

// Set DbContext
builder.Services.AddDbContext<SelluraContext>(options =>
{
    options.UseSqlServer(connectionString);
});

#endregion

var app = builder.Build();

#region Configure Middlewares

if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseAuthentication();
app.UseRouting();
app.UseAuthorization();

#endregion

#region Map Endpoints

app.UseEndpoints(endpoints =>
{
    
    endpoints.MapControllerRoute(
        name: "default",
        pattern: "{controller=Home}/{action=Index}/{id?}"
    );
});

#endregion

app.Run();
