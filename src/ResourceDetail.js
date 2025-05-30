import React from 'react'
import { useParams,useNavigate } from "react-router-dom"; 
import Header from './Header.js'
import './ResourceDetail.css'
import Footer from './Footer.js'
import FavoriteButton from './FavoriteButton.js'

/* props.data,props.ids,props.updateStorage */

function RouterPage(props) {

    const { programId } = useParams();
    let navigate = useNavigate();
    let activity = props.data.filter((item) => item.gid === programId)[0];
    

    if(! activity)
    {
        return <h2>loading</h2>
    }
    console.log("details",programId,activity.gid,props.ids)

    return (
    <div className="Resources">
        <Header name={activity.title} />
        <div className="content">
        <div className="resourceDetails">
           
                                          
                            
        <span className="links">
            <span className="siteLink">       
                <span className="backLink">
                    <button onClick={()=>navigate(-1)}>
                        <img alt="back" className = "smallButtonSVG" src = '../imgs/arrow-left-solid.svg'></img>
                    </button>
                </span>
                </span>
                <FavoriteButton 
                        gid={activity.gid} 
                        updateStorage={props.updateStorage} 
                        isFavorite={props.ids.includes(activity.gid)}
                    />

            </span>
                            
            <div className="logoText">

            {Object.hasOwn(activity, 'logo') ?
                <span className="logo"> <img src={activity.logo} alt={activity.sectionTitle} /> </span>
                   : null}
            


            {Object.hasOwn(activity, 'description') && activity.description !== "" ?
                    <span className="text">
                        {activity.description.map((desc) => (<p>{desc}</p>))}
                    </span> 
                    : null}

            </div>

            {Object.hasOwn(activity, 'links') ?
                    <span className="links">
                        {activity.links.map((link) => <a href={link.link}><button target="_blank">{link.text}</button></a>)}
                    </span> 
                    : null}


            
        </div>
        <Footer />
        </div>
    </div>
    );

}

export default RouterPage;