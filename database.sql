CREATE DATABASE TiendaDB;
GO

USE TiendaDB;
GO

CREATE TABLE Categorias (
    IdCategoria INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL UNIQUE
);
GO

CREATE TABLE Productos (
    IdProducto INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    IdCategoria INT NOT NULL,
    Precio DECIMAL(10,2) NOT NULL CHECK (Precio >= 0),
    Stock INT NOT NULL DEFAULT 0 CHECK (Stock >= 0),
    FechaRegistro DATETIME NOT NULL DEFAULT GETDATE(),
    CONSTRAINT FK_Productos_Categorias FOREIGN KEY (IdCategoria)
        REFERENCES Categorias(IdCategoria)
);
GO

CREATE TABLE Empleados (
    IdEmpleado INT IDENTITY(1,1) PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Puesto VARCHAR(50) NOT NULL,
    Salario DECIMAL(10,2) NOT NULL CHECK (Salario > 0),
    FechaIngreso DATE NOT NULL DEFAULT GETDATE()
);
GO

INSERT INTO Categorias (Nombre) VALUES
('Tecnología'), ('Muebles'), ('Papelería');

INSERT INTO Productos (Nombre, IdCategoria, Precio, Stock) VALUES
('Laptop Lenovo', 1, 5500.00, 10),
('Mouse Logitech', 1, 150.00, 40),
('Escritorio de madera', 2, 1200.00, 5),
('Silla ergonómica', 2, 950.00, 8),
('Cuaderno universitario', 3, 25.00, 100),
('Audífonos Sony', 1, 450.00, 15);
GO