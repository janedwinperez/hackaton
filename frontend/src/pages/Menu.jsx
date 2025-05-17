import '../css/Menu.css'

function Menu(){

    return(
        <div id='menu'>
            <ul className='nav'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/Contact">Contacts</a></li>
                <li><a>Services</a>
                    <ul>
                        <li><a>Farmers</a>
                            <ul>
                                <li><a>Register</a></li>
                            </ul>
                        </li>
                        <li><a>Shareholders</a>
                            <ul>
                                <li><a>Register</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
  
export default Menu