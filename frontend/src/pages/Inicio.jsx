import { useState } from 'react'
import '../css/Inicio.css'
import tecnologias1 from '../assets/tecnologias1.jpg'
import tecnologias2 from '../assets/tecnologias2.jpg'
import facebookico from '../assets/facebook_icon.png'
import gmailico from '../assets/gmail_icon.png'
import logo from '../assets/logo_coffee_tech-removebg-preview.png'
//import google from '../assets/google_icon.png'



import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'




function Inicio(){

    const arrayimagenes = [tecnologias1, tecnologias2];
    const [indice, setIndice] = useState(0);
    const [imagenActual, setImagenActual] = useState(arrayimagenes[0]);


    const handleClick = () => {
        const siguienteIndice = (indice + 1) % arrayimagenes.length;
        setIndice(siguienteIndice);
        setImagenActual(arrayimagenes[siguienteIndice]);
    };


    function handleSuccess(){
        console.log('Exito')
    }


    function handleError(){
        console.log('Error')
    }
    

    return(
        <body>
            <header>
                <div><img src={logo} alt='imagen'/></div>
            </header>
            <div id='contenido'>
                <main>
                    <div><img src={imagenActual} alt='imagen' /></div>
                    <button onClick={handleClick}>Look our services</button>
                </main>
                <aside>
                    <div>Formulario de registro</div>
                    <div>
                        <GoogleOAuthProvider clientId='930968964447-2p2rck5hcbiapqbgl8ukb33so9h1dda7.apps.googleusercontent.com'>
                            <GoogleLogin onSuccess={handleSuccess} onError={handleError}/>
                        </GoogleOAuthProvider>
                    </div>
                </aside>
            </div>


            <footer> 
                <div className='redsocial'>
                    <div>
                        <a href='https://www.facebook.com/jeper2000?locale=es_LA'><img src={facebookico} alt='imagen' /></a>
                    </div>
                    <div>
                       <p>Contact facebook</p> 
                    </div>
                </div>

                <div className='redsocial'>
                    <div>
                        <a href='mailto:janedwin2000@gmail.com'><img src={gmailico} alt='imagen' /></a>
                    </div>
                    <div>
                       <p>Contact email</p> 
                    </div>
                </div>
            </footer>
        </body>
    )
}

export default Inicio