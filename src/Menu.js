import React, { useState,} from 'react'; 

import {Link,useLocation} from "react-router-dom";
import './Menu.css';

function Menu(){

    const [buttonColor, setButtonColor] = useState('#AA7589');

    function toggleNav() {
      console.log(document.getElementById("mySidenav").style);
      setButtonColor(buttonColor === '#AA7589' ? '#FFC7DC' : '#AA7589');
      
      if (!document.getElementById("mySidenav").style.width){
        document.getElementById("mySidenav").style.width = "0px";
      }
      if(document.getElementById("mySidenav").style.width === "0px"){
        document.getElementById("mySidenav").style.width = "250px";
      } else {
        document.getElementById("mySidenav").style.width = "0px";
      }

    }
    const location = useLocation();
    const pathname = location.pathname;
    
      
    return(
        <>
        <div id="mySidenav" className="sidenav">
            {/* <Link className="closebtn" onClick={toggleNav}>≡</Link> */}
            
            <Link to="/" className="menuHome">{pathname === "/" ? "→ Home" : "Home"}</Link>
            
            <p>Resources</p>
            <ul>
              <li className="menuActivities"><Link to="/activities">{pathname === "/activities" ? "→ Activities" : "Activities"} </Link></li>
              <li className="menuChildcare"><Link to="/childcare">{pathname === "/childcare" ? "→ Childcare" : "Childcare"}</Link></li>
              <li className="menuPreschool"><Link to="/preschool">{pathname === "/preschool" ? "→ Preschool" : "Preschool"}</Link></li>
              <li className="menuOther"><Link to="/other">{pathname === "/other" ? "→ Other" : "Other"}</Link></li>
            </ul>

            <Link to="/support" className="menuSupport">{pathname === "/support" ? "→ Support" : "Support"}</Link>
            <Link to="/favorites" className="menuBookmarks">{pathname === "/favorites" ? "→ Favorites" : "Favorites"}</Link>
            <Link to="/donate" className="menuDonate">{pathname === "/donate" ? "→ Donate" : "Donate"}</Link>



        
        </div>
        
        <span onClick={toggleNav} className="menuButton" style={{ color: buttonColor}}>≡</span>
      </>
    )
}

export default Menu;
