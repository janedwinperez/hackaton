import '../css/Menu.css'

function Menu(){

    return(
        <div className='menu'>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/Contact">Contacts</a></li>
                <li><a href="/Services">Services</a></li>
            </ul>
        </div>
    )
}
  
export default Menu