﻿using System;

namespace PSStore.Application.Sales.Commands.CreateSale
{
    public class CreateSaleModel
    {
        public Guid CustomerId { get; set; }

        public Guid EmployeeId { get; set; }

        public Guid ProductId { get; set; }

        public int Quantity { get; set; }
    }
}
