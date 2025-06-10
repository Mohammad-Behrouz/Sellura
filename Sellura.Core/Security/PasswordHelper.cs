using System.Security.Cryptography;
using System.Text;

namespace MyEShop.Core.Security;

public class PasswordHelper
{
    public static string EncodePasswordPBKDF2(string password)
    {
        // 1. تعریف یک salt تصادفی با طول 16 بایت
        byte[] salt = new byte[16];
        using (var rng = RandomNumberGenerator.Create())
        {
            rng.GetBytes(salt);
        }

        // 2. ایجاد هش با استفاده از PBKDF2 و الگوریتم HMACSHA256
        var pbkdf2 = new Rfc2898DeriveBytes(password, salt, 100000, HashAlgorithmName.SHA256);
        byte[] hash = pbkdf2.GetBytes(32); // خروجی 32 بایتی (256 بیت)

        // 3. ترکیب salt و hash برای ذخیره در دیتابیس
        byte[] hashBytes = new byte[48]; // 16 بایت salt + 32 بایت hash
        Array.Copy(salt, 0, hashBytes, 0, 16);
        Array.Copy(hash, 0, hashBytes, 16, 32);

        // 4. تبدیل به رشته Base64 برای ذخیره راحت‌تر
        return Convert.ToBase64String(hashBytes);
    }

    public static bool VerifyPasswordPBKDF2(string enteredPassword, string storedHash)
    {
        // تبدیل رشته ذخیره‌شده به بایت‌
        byte[] hashBytes = Convert.FromBase64String(storedHash);

        // استخراج salt (16 بایت اول)
        byte[] salt = new byte[16];
        Array.Copy(hashBytes, 0, salt, 0, 16);

        // ساخت هش جدید با همون salt و تنظیمات
        var pbkdf2 = new Rfc2898DeriveBytes(enteredPassword, salt, 100000, HashAlgorithmName.SHA256);
        byte[] hash = pbkdf2.GetBytes(32);

        // مقایسه هش جدید با هش ذخیره‌شده
        for (int i = 0; i < 32; i++)
        {
            if (hashBytes[i + 16] != hash[i])
                return false;
        }

        return true;
    }


}