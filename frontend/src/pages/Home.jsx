import '../css/Home.css'
import Menu from './Menu'

function Home(){
    return (
        <div className="home-container">
            <Menu />
            <p>Bienvenido a nuestra aplicación</p>
        </div>
      );
}
  
export default Home