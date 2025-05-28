import React from 'react'; 
import Menu from './Menu.js';
import './Header.css';
var ReactFitText = require('react-fittext');


function Header(props){
    return(
    <div className="Header">
        <div className="menu">{<Menu />}</div>
        <a href="/" className="logoLink">
            <img src="../imgs/HKYKIDSLOGO.png" className='logoImg'/>
        </a>
        <ReactFitText>
            <h1>{props.name}</h1>
        </ReactFitText>
        
    </div>
    )
}

export default Header;

