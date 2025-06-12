using Microsoft.EntityFrameworkCore;
using Sellura.Datalayer.Context;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        policy =>
        {
            policy.AllowAnyOrigin()    // اجازه به همه‌ی دامین‌ها
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

// Add services to the container.

builder.Services.AddControllers();
//swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


#region Add Services

builder.Services.AddControllersWithViews();

#endregion

#region Database Context

// Get current environment
var environment = builder.Environment;
builder.Services.AddDbContext<SelluraContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("connection")));


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

app.UseSwagger();
app.UseSwaggerUI();

app.UseRouting();

app.UseCors("AllowAll");  // اینجا مهمه

app.UseAuthentication();
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
app.MapFallbackToFile("/index.html");

#endregion

app.UseSwagger();
app.UseSwaggerUI();


app.Run();
