import React, {Component} from 'react'; 
import Menu from './Menu.js';
import './Header.css';

const textFit = require("textfit");



class Header extends Component
{

    redrawText()
    {
        console.log("updating");
        textFit(document.getElementsByClassName('fitMe'), {alignHoriz: true, alignVert: true});
    }

    componentDidMount()
    {
        console.log("mount");
        this.redrawText()
        window.addEventListener('resize', this.redrawText);
    }

    componentWillUnmount()
    {
        window.removeEventListener('resize', this.redrawText);
    }

    componentDidUpdate()
    {
        console.log("updating");
        this.redrawText();
    }

    render() {
        return (
        <div className="Header">
            <div className="menu">{<Menu />}</div>
            <a href="/" className="logoLink">
                <img src="../imgs/HKYKIDSLOGO.png" alt="walking family" className='logoImg'/>
            </a>
            <div className="fitMe">
                <h1 >{this.props.name}</h1>
            </div>
        </div>

        )
    }

}

export default Header;

