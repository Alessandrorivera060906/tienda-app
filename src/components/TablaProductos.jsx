function TablaProductos({ productos }) {
  if (productos.length === 0) {
    return <p className="vacio">No se encontraron productos.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.categoria}</td>
            <td>Q {producto.precio.toFixed(2)}</td>
            <td>{producto.stock}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TablaProductos;