import React, {Component} from 'react'; 
import Menu from './Menu.js';
import './Header.css';

//const textFit = require("textfit");
//import { AutoTextSize } from 'auto-text-size'


class Header extends Component
{
    constructor(props)
    {   super(props);
        this.state = {title:props.name};
    }

    static getDerivedStateFromProps(props,state)
    {
        console.log("resetting state?",props,state);
        return {title:props.name};
    }


    redrawText()
    {
        console.log("redrawing");
        //textFit(document.getElementsByClassName('fitMe'), {alignHoriz: true, alignVert: true});
        //this.forceUpdate()
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

    /*
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("afterRender before update",this.props.name);
        this.redrawText();
      }
*/
    shouldComponentUpdate()
    {
        console.log("should update");
        return true;
    }

    componentDidUpdate()
    {
        console.log("Did updating",this.props.name);
        this.redrawText();
    }



    render() {
        console.log("rendering header",this.props.name,this.state.title);
        return (
        <div className="Header">
            <div className="menu">{<Menu />}</div>
            <a href="/" className="logoLink">
                <img src="../imgs/HKYKIDSLOGO.png" alt="walking family" className='logoImg'/>
            </a>
            
            <div className="vertCenter">
                <h1 >{this.state.title}</h1>
            </div>
          
        </div>

        )
    }

}

export default Header;

