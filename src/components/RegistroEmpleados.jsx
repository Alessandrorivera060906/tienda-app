import { useState } from "react";

function RegistroEmpleados() {
  const [empleados, setEmpleados] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    puesto: "",
    salario: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.apellido || !form.puesto || !form.salario) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const nuevo = {
      id: empleados.length + 1,
      ...form,
      salario: parseFloat(form.salario)
    };

    setEmpleados([...empleados, nuevo]);
    setForm({ nombre: "", apellido: "", puesto: "", salario: "" });
  };

  return (
    <section>
      <h2>Registro de Empleados</h2>

      <form onSubmit={handleSubmit} className="formulario">
        <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
        <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} />
        <input name="puesto" placeholder="Puesto" value={form.puesto} onChange={handleChange} />
        <input name="salario" type="number" placeholder="Salario" value={form.salario} onChange={handleChange} />
        <button type="submit">Registrar</button>
      </form>

      {empleados.length === 0 ? (
        <p className="vacio">No hay empleados registrados.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Puesto</th>
              <th>Salario</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.nombre}</td>
                <td>{emp.apellido}</td>
                <td>{emp.puesto}</td>
                <td>Q {emp.salario.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default RegistroEmpleados;