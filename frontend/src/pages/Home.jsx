import Menu from './Menu'
import '../css/Home.css'

function Home(){

    return(
        <div>
            <div className='titulo'>
                <h1>COFFEE TECH</h1>
            </div>
            <button>Inicio</button>
            <Menu />
        </div>
    )
}
  
export default Home