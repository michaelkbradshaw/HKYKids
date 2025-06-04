import React, { useState,} from 'react'; 

import {Link,useLocation} from "react-router-dom";
import './Menu.css';

function Menu(){

    const [buttonColor, setButtonColor] = useState('#AA7589');

    function toggleNav() {
      console.log("toggle",document.getElementById("mySidenav").style);
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
                        
            <Link to="/" className="menuHome" onClick={toggleNav}>{pathname === "/" ? "→ Home" : "Home"}</Link>
            
            <p>Resources</p>
            <ul>
              <li className="menuEnroll">
                <Link to="/enroll" onClick={toggleNav}>
                  {pathname === "/enroll" ? "→ Enroll" : "Enroll"} 
                </Link>
              </li>       
              <li className="menuActivities"><Link to="/activities" onClick={toggleNav}>{pathname === "/activities" ? "→ Activities" : "Activities"} </Link></li>
              <li className="menuChildcare"><Link to="/childcare" onClick={toggleNav}>{pathname === "/childcare" ? "→ Childcare" : "Childcare"}</Link></li>
              <li className="menuPreschool"><Link to="/preschool" onClick={toggleNav}>{pathname === "/preschool" ? "→ Preschool" : "Preschool"}</Link></li>
            </ul>
            <Link to="/support" className="menuSupport" onClick={toggleNav}>{pathname === "/support" ? "→ Support" : "Support"}</Link>
            <Link to="/favorites" className="menuBookmarks" onClick={toggleNav}>{pathname === "/favorites" ? "→ Favorites" : "Favorites"}</Link>
            <Link to="/donate" className="menuDonate" onClick={toggleNav}>{pathname === "/donate" ? "→ Donate" : "Donate"}</Link>



        
        </div>
        
        <span onClick={toggleNav} className="menuButton" style={{ color: buttonColor}}>≡</span>
      </>
    )
}

export default Menu;
