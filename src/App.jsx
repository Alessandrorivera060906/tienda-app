import { useState } from "react";
import Buscador from "./components/Buscador";
import TablaProductos from "./components/TablaProductos";
import RegistroEmpleados from "./components/RegistroEmpleados";
import "./App.css";

const productos = [
  { id: 1, nombre: "Laptop Lenovo", categoria: "Tecnología", precio: 5500, stock: 10 },
  { id: 2, nombre: "Mouse Logitech", categoria: "Tecnología", precio: 150, stock: 40 },
  { id: 3, nombre: "Escritorio de madera", categoria: "Muebles", precio: 1200, stock: 5 },
  { id: 4, nombre: "Silla ergonómica", categoria: "Muebles", precio: 950, stock: 8 },
  { id: 5, nombre: "Cuaderno universitario", categoria: "Papelería", precio: 25, stock: 100 },
  { id: 6, nombre: "Audífonos Sony", categoria: "Tecnología", precio: 450, stock: 15 }
];

function App() {
  const [busqueda, setBusqueda] = useState("");

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor">
      <h1>Sistema de Productos y Empleados</h1>

      <section>
        <h2>Listado de Productos</h2>
        <Buscador valor={busqueda} onCambiar={setBusqueda} />
        <TablaProductos productos={productosFiltrados} />
      </section>

      <RegistroEmpleados />
    </div>
  );
}

export default App;