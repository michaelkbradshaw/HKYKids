import React from 'react'; 
import Menu from './Menu.js';
import './Header.css';

function Header(props)
{
        return (
        <div className="Header">
            <div className="menu">{<Menu />}</div>
            <a href="/" className="logoLink">
                <img src="../imgs/HKYKIDSLOGO.png" alt="walking family" className='logoImg'/>
            </a>
            
            <div className="vertCenter">
                <h1 >{props.headerText}</h1>
            </div>
          
        </div>

        )
}

export default Header;

