namespace Sellura.Server.DTOs
{
    public class WareHouseDTO
    {
        public required string Name { get; set; }
        public required string Address { get; set; }
        public required int Capacity { get; set; }

        public string? Manager { get; set; }
        public required string Phone { get; set; }
        public required string Situation { get; set; }
        public required string City { get; set; }

    }
}
