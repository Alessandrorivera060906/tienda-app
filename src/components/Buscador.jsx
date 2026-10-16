function Buscador({ valor, onCambiar }) {
  return (
    <div className="buscador">
      <input
        type="text"
        placeholder="Buscar producto por nombre o categoría..."
        value={valor}
        onChange={(e) => onCambiar(e.target.value)}
      />
    </div>
  );
}

export default Buscador;