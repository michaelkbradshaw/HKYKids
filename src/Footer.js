import React from 'react'; 
import './Footer.css'


function Footer(props){
    return(
    <div className="footer">
        <a href="https://www.facebook.com/heart.of.ky.kids" target="_blank" className="social">
            <img src="https://ssl.gstatic.com/atari/images/sociallinks/facebook_white_44dp.png" alt="Facebook" className="social" />
        </a>
        <a href="https://www.instagram.com/heart.of.ky.kids/" target="_blank" className="social">
            <img src="https://ssl.gstatic.com/atari/images/sociallinks/instagram_white_44dp.png" alt="Instagram" className="social" />
        </a>   
    </div>
    )
}

export default Footer;

