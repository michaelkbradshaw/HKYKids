import React from 'react';
import './Resources.css'
import Header from './Header.js';
import Footer from './Footer.js';
import ResourceLink from "./ResourceLink";

/* props.data, props.sectionIds, props.headerText,props.ids,props.updateStorage*/

function Home(props) {

  if(props.data)
  {
    var learn=props.data.find((activity)=>activity.gid==="LearnKY");     
    if(learn)
    {
      var learnLink = learn.links.find((link)=>link.text==="Kindergarten Readiness");
    }
  }
    return (
        <div className="Resources">
            <Header name="Heart of KY Kids!" />
            <div className="content">
                <div className="note">Helping young children thrive in Boyle and Mercer Counties</div>
                <section>
                    <h2>Our Mission</h2>
                    <hr />    
                    <div className="resource onlyText">
                    <span className="text">
                    <p>
      We’re here to give every child the best possible start in life. HKY Kids supports early childhood success by connecting families and educators with the tools, resources, and partnerships needed to prepare children for kindergarten — and beyond.
    </p>
    <p>
      This website is your <strong>go-to resource hub</strong> for parents and caregivers of young children in Boyle and Mercer Counties. You’ll find trusted links to local programs, educational tools, childcare providers, health services, and more — all in one place.
    </p>
                    </span>
                    </div>
                </section>
                <section>
                    <h2>What is Kindergarten Readiness?</h2>
                    <hr />    
                    <div className="resource onlyText">
                    <span className="text">
                    <p>
      Kindergarten readiness means your child enters school with the basic skills to learn, play, and grow. These include early language, social-emotional, and motor skills that help them thrive in a classroom environment.
                    </p>
                    </span>
      
      

      {learnLink?
      <ResourceLink activity={learn} link={learnLink} />
      :null}

    
                    
                    </div>
                </section>
                <section>
                    <h2>Explore Local Resources</h2>
                    <hr />    
                    <div className="resource onlyText">
                        <p>
                            Use the menu in the upper right or the links below to access the resources availible in your community.
                        </p>
                    <div className="directory">
      <div className="card">
        <h3>📝 <a href="/#/enroll"> Enroll </a>
        </h3>
        <p>Find enrollment info for partner programs like Dolly Parton's Imagination Library.
        
        </p>
      </div>
      <div className="card">
        <h3>🧸 <a href="/#/activities">Activities</a></h3>
        <p>Discover fun events, storytimes, and early learning activities.</p>
      </div>
      <div className="card">
        <h3>🏠 <a href="/#/childcare">Childcare</a></h3>
        <p>Browse trusted childcare providers — licensed home and center-based care.</p>
      </div>
      <div className="card">
        <h3>🏫 <a href="/#/preschool">Preschool</a></h3>
        <p>Explore preschool options across Boyle and Mercer Counties.</p>
      </div>
      <div className="card">
        <h3>💛 <a href="/#/support">Support</a></h3>
        <p>Access health, nutrition, screenings, and family support services.</p>
      </div>
      <div className="card">
        <h3>⭐ <a href="/#/favorites">Favorites</a></h3>
        <p>Save and access your most-used links in one place.</p>
      </div>
      <div className="card">
        <h3>💖 <a href="/#/donate">Donate</a></h3>
        <p>Support early childhood success — every gift helps families thrive.</p>
      </div>
    </div>
                    </div>
                </section>
                <section>
                    <h2>Who We Are</h2>
                    <hr />    
                    <div className="resource onlyText">
                    <span className="text">
                    <p>
      Our collaborative includes a wide range of community partners who care deeply about young children:
    </p>
    <ul className="homelist">
      <li><strong>Educators and Early Intervention Experts</strong> from local school districts, Head Start, and First Steps</li>
      <li><strong>Childcare Providers</strong> including ChildCare Aware, Child Care Health, and individual providers</li>
      <li><strong>Public Partners</strong> like UK Cooperative Extension, Health Departments, and Public Libraries</li>
      <li><strong>Community Organizations & Businesses</strong> such as United Way, Ephraim McDowell Health, Centre College, Danville Parks and Rec, Art Center of the Bluegrass, Whitaker Bank, Plaid Elephant Books</li>
      <li><strong>Civic Groups</strong> including Kiwanis, Rotary, and the Gladys Project</li>
    </ul>
                    </span>
                    </div>
                </section>
                <section>
                    <h2>Join Us</h2>
                    <hr />    
                    <div className="resource onlyText">
                    <span className="text">
                    <p>
      We’re always looking for new partners and voices in our mission to support young children.
    </p>
    <p>
      Interested in getting involved? Email us at <a href="mailto:chair@hkykids.org">chair@hkykids.org</a>
    </p>
                    </span>
                    </div>
                </section>
            </div>
            <Footer />
            </div>
    );

}

export default Home;