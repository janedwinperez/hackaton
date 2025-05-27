// https://www.w3schools.com/html/html_tables.asp
import Menu from './Menu'
import '../css/Contact.css'

function Contact(){

    return(
        <div>
            <Menu />

            <div className='formulario'>
                <form>
                    <div>
                        <label htmlFor='nombre'>Nombre completo:</label>
                        <input type='text' name="nombre" id="nombre" />
                    </div>

                    <div>
                        <label htmlFor='correo'>Correo:</label>
                        <input type='email' name="correo" id="correo" />
                    </div>

                    <div>
                        <label htmlFor='mensaje'>Mensaje:</label>
                        <textarea name='mensaje' id='mensaje'></textarea>
                    </div>

                    <div>
                        <button type='submit'>Enviar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
  
export default Contact