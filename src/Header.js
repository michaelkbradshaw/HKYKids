import React from 'react'; 
import Menu from './Menu.js';
import './Header.css';



function Header(props){
    return(
    <div className="Header">
        <div className="menu">{<Menu />}</div>
        <div className="topBar"> 
        <a href="/" className="logoLink"><img src="../imgs/HKYKIDSLOGO.png" className='logoImg'/></a>
        </div>
        <h1>{props.name}</h1>
    </div>
    )
}

export default Header;

