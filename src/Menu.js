import React from 'react'; 
import {Link, useParams} from "react-router-dom";
import './Menu.css';

function Menu(){
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";

      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
    return(
        <>
        <div id="mySidenav" className="sidenav">
            <Link className="closebtn" onClick={closeNav}>≡</Link>
            
            <Link to="/" className="menuHome">{window.location.pathname === "/" ? "→ Home" : "Home"}</Link>
            
            <p>Resources</p>
            <ul>
              <li className="menuActivities"><Link to="/activities">{window.location.pathname === "/activities" ? "→ Activities" : "Activities"} </Link></li>
              <li className="menuChildcare"><Link to="/childcare">{window.location.pathname === "/childcare" ? "→ Childcare" : "Childcare"}</Link></li>
              <li className="menuPreschool"><Link to="/preschool">{window.location.pathname === "/preschool" ? "→ Preschool" : "Preschool"}</Link></li>
              <li className="menuOther"><Link to="/other">{window.location.pathname === "/other" ? "→ Other" : "Other"}</Link></li>
            </ul>

            <Link to="/support" className="menuSupport">{window.location.pathname === "/support" ? "→ Support" : "Support"}</Link>
            <Link to="/bookmarks" className="menuBookmarks">{window.location.pathname === "/bookmarks" ? "→ Bookmarks" : "Bookmarks"}</Link>
            <Link to="/donate" className="menuDonate">{window.location.pathname === "/donate" ? "→ Donate" : "Donate"}</Link>



        
        </div>
      
        <span onClick={openNav} className="menuButton">≡</span>
      </>
    )
}

export default Menu;
