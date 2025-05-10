import '../css/Home.css'
import Menu from './Menu'

function Home(){
    return (
        <div className="home-container">
            <Menu />
            <h1>AgroContacto</h1>
            <p>Bienvenido a nuestra aplicación</p>
        </div>
      );
}
  
export default Home