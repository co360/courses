﻿using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Section1.UsingSubquery
{
    public class Context : DbContext
    {
        public DbSet<Invoice> Invoices { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = @"Data Source=(LocalDB)\MSSQLLocalDB;AttachDbFilename=C:\Users\flavio\dev\courses\alura\course_entity_linq_002\Section1\Section1.UsingSubquery\database.mdf;Integrated Security=True;Connect Timeout=30";

            optionsBuilder.UseSqlServer(connectionString);

            var loggerFactory = LoggerFactory.Create(loggingBuilder => loggingBuilder.AddConsole());

            optionsBuilder.UseLoggerFactory(loggerFactory);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Invoice

            modelBuilder.Entity<Invoice>()
                .ToTable("NotaFiscal");

            modelBuilder.Entity<Invoice>()
                .Property(it => it.Id).HasColumnName("NotaFiscalId");

            modelBuilder.Entity<Invoice>()
                .Property(it => it.Amount).HasColumnName("Total");

            modelBuilder.Entity<Invoice>()
                .Property(it => it.CustomerId).HasColumnName("ClienteId");

            #endregion

            #region Customer

            modelBuilder.Entity<Customer>()
                .ToTable("Cliente");

            modelBuilder.Entity<Customer>()
                .Property(it => it.Id).HasColumnName("ClienteId");

            modelBuilder.Entity<Customer>()
                .Property(it => it.FirstName).HasColumnName("PrimeiroNome");

            modelBuilder.Entity<Customer>()
                .Property(it => it.LastName).HasColumnName("Sobrenome");

            #endregion
        }
    }
}