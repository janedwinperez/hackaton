import './Registro1.css'; // Importa el CSS para Registro1

// Nuevo componente Registro1
function Registro1() {
  return (
    <div className="registro1-container">
      <h1>Formulario de Registro 1</h1>
      <p>Este es el contenido del formulario de Registro 1.</p>
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
      </form>
    </div>
  );
}

export default Registro1;
