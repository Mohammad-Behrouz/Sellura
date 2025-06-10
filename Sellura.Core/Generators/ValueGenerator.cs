namespace MyEShop.Core.Generators;

public class ValueGenerator
{
    public static string GenerateUniqCode()
    {
        return Guid.NewGuid().ToString().Replace("-" , "");
    }
}