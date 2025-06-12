using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Sellura.Datalayer.DTOs
{
    public class AddProduct
    {
        public required string Name { get; set; }
        public required string Code { get; set; }
        public required string MeasurementUnit { get; set; }
        public required int MinimumStuck { get; set; }
        public required float Weight { get; set; }
        public int Offer { get; set; }
    }
}
