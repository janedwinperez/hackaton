import { useState } from 'react'
import '../css/Rproductores.css'


function Rproductores() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        ubicacion: '',
        cultivo: '',
        extension: '',
    });
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(''); // Limpiar mensajes anteriores
        setIsError(false); // Resetear estado de error

        try {
            const response = await fetch('http://localhost:5000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setFormData({ // Opcional: Limpiar el formulario al éxito
                    nombre: '',
                    email: '',
                    ubicacion: '',
                    cultivo: "",
                    extension: "",
                });
            } else {
                setIsError(true);
                setMessage(data.message || 'Error al registrar usuario');
            }
        } catch (error) {
            setIsError(true);
            setMessage('Error de conexión con el servidor.');
            console.error('Error al enviar el formulario:', error);
        }
    };

    return (
        <div className="registro-container">
            <h2>Registro de productores</h2>
            <form onSubmit={handleSubmit} className="registro-form">
                <div className="form-group">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ubicacion">Ubicacion:</label>
                    <input
                        type="text"
                        id="ubicacion"
                        name="ubicacion"
                        value={formData.ubicacion}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="cultivo">Cultivo:</label>
                    <input
                        type="text"
                        id="cultivo"
                        name="cultivo"
                        value={formData.cultivo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="extension">Extension:</label>
                    <input
                        type="text"
                        id="extension"
                        name="extension"
                        value={formData.extension}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Registrar</button>
            </form>
            {message && (
                <p className={`message ${isError ? 'error' : 'success'}`}>
                    {message}
                </p>
            )}
        </div>
    );
}

export default Rproductores;