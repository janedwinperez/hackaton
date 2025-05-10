

// Nuevo componente Registro1
function Registro1() {
  return (
    <div className="registro1-container">
      <h1>Formulario Agricultores</h1>
      {/* Aquí puedes agregar los campos del formulario */}
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="form-control" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
        <a href="https://127.0.0.1:5173"><button>Regresar</button></a>
      </form>
    </div>
  );
}

export default Registro1;
