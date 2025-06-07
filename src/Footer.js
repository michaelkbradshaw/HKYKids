import React from 'react'; 
import './Footer.css'


function Footer(props){
    return(
        <footer>
<div className="follow">
            <div className="followText">
                Follow Us
            </div>

            <div className="social">
                <a
                    href="https://www.facebook.com/heart.of.ky.kids"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://ssl.gstatic.com/atari/images/sociallinks/facebook_white_44dp.png"
                        alt="Facebook"
                    />
                </a>
                <a
                    href="https://www.instagram.com/heart.of.ky.kids/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="https://ssl.gstatic.com/atari/images/sociallinks/instagram_white_44dp.png"
                        alt="Instagram"
                    />
                </a>
            </div>
        </div>
        
  <div className="info">
    <h2 >HKY Kids</h2>
    <p><strong>Helping young children thrive in Boyle and Mercer Counties</strong></p>

    <div >
      <div>
        <h3 >Quick Links</h3>
        <ul >
            <li><a href="/#/enroll">Enroll</a></li>
            <li><a href="/#/childcare">Childcare</a></li>
            <li><a href="/#/activities">Activities</a></li>
            <li><a href="/#/support">Support</a></li>
            <li><a href="/#/donate">Donate</a></li>
            <li><a href="mailto:chair@hkykids.org">Join Us</a></li>
        </ul>
      </div>

      <div>
        <h3 >Stay Connected</h3>
        <p>
          Have a question or know a great resource we should include?<br />
          <a href="mailto:chair@hkykids.org">We'd love to hear from you!</a>
        </p>
      </div>
    </div>

    <hr  />

    <p>
      © 2025 HKY Kids | A community-led early childhood initiative<br />
      Website content is for informational purposes only and is not intended as educational or medical advice.
    </p>
</div>
</footer>
    )
}

export default Footer;

