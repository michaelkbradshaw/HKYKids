import React, {Component} from 'react'; 
import Menu from './Menu.js';
import './Header.css';
//import { textFit } from 'textfit';
//import 'textfit.js';
//import 'textfit';
const textFit = require("textfit");

/*function Header(props){
    return(
    <div className="Header">
        <div className="menu">{<Menu />}</div>
        <a href="/" className="logoLink">
            <img src="../imgs/HKYKIDSLOGO.png" className='logoImg'/>
        </a>
        <h1 class="fitMe">{props.name}</h1>
    </div>
    )
}
*/

class Header extends Component
{

    redrawText()
    {
        console.log("updating");
        textFit(document.getElementsByClassName('Header'), {alignHoriz: true, alignVert: true});
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
        //console.log("TF",textFit);
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
            <h1 className="fitMe">{this.props.name}</h1>
        </div>

        )
    }

}

export default Header;

