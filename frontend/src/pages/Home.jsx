import Menu from './Menu'
import '../css/Home.css'
import logo from '../assets/logo_coffee_tech-removebg-preview.png'

function Home(){

    return(
        <div className='principal_home'>
            <div className='container1'>
                <div>
                    <img src={logo} alt='imagen' />
                </div>
                <div>
                    <button>Singn up</button>
                    <button>Singn in</button>
                </div>
            </div>
            <Menu />
        </div>
    )
}
  
export default Home