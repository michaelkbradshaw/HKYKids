import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link, useParams }
    from "react-router-dom"; import './Resources.css'
import Header from './Header.js'
import './RouterPage.css'
import Footer from './Footer.js'

/* props.data */

function RouterPage(props) {

    const { programId } = useParams();
    console.log("ProgramID", programId);
    
    console.log("props.data", props.data);

    const storedIds = JSON.parse(localStorage.getItem('ids')) || [];
    const [ids, setIds] = useState(storedIds)
  
    useEffect(() => {
        
        localStorage.setItem('ids', JSON.stringify(ids));
        console.log(storedIds);
    }, [ids])

  const UpdateStorage = (gid) => {
    let exists = false;
    for (let id of ids) {
        if (gid == id) {
            exists = true;
        }
    }
    if (exists == false) {
        console.log("UPDATE STORAGE RUNNING")
        setIds([...ids, gid])
        gid = ''
    }
    }
    let activity = props.data.filter((item) => item.gid === programId)[0];
    console.log("activity",activity);
    if(! activity)
    {
        return <h2>loading</h2>
    }

    return (
    <>
        <Header name={activity.title} />
        <div className="content">
        <div className="resourceDetails">
           
                                          
                            
            <span className="allLinks">
                        
                <span className="bookmarks"><button onClick={() => UpdateStorage(activity.gid)}>{<img className = "smallButtonSVG" src = '../imgs/bookmarkButton.svg'></img>}</button></span>
                         
                <span className="backLink">
                    <a href={"#/page/" + activity.gid}><button target="_blank"><img className = "smallButtonSVG" src = '../imgs/arrow-left-solid.svg'></img></button></a>
                </span>
            </span>
                            
            <div className="logoText">

            {Object.hasOwn(activity, 'logo') ?
                <span className="logo"> <img src={activity.logo} alt={activity.sectionTitle} /> </span>
                   : null}
            


            {Object.hasOwn(activity, 'description') && activity.description != "" ?
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
    </>
    );

}

export default RouterPage;