import Menu from './Menu'
import '../css/About.css'
import foto1 from '../assets/tecnologias.jpg'

function About(){

    return(
        <div>
            <Menu />
            <div className='contenedor'>
                <div className='miImagen'>
                    <img src={foto1} alt='imagen' />
                </div>

                <div className='parrafo'>
                    <p>
                        El proyecto nace como una iniciativa de poner al alcance de los cafeteros toda la 
                        tecnologia existente para mejorar sus niveles de vida. 
                    </p>
                </div>
            </div>
        </div>
    )
}
  
export default About