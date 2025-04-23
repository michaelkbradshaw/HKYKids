import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Link, useParams }
    from "react-router-dom"; import './Resources.css'
import Header from './Header.js'
import './RouterPage.css'

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


    return (
        <div className="moreInfoPage">
         <Header name={props.headerText} />
            <div className="splitResources">
                <>
                <div className="routerInfo">
                    {props.data
                        .filter((item) => item.gid === programId)
                        .map((filteredItem) => (
                            <>                      
                            {Object.hasOwn(filteredItem, 'links') ?
                                <span className="links">
                                {filteredItem.links.map((link) => <a href={link.link}><button target="_blank">{link.text}</button></a>)}
                                </span> : null}
                            {Object.hasOwn(filteredItem, 'description') && filteredItem.description != "" ?
                                <span className="text">
                                {filteredItem.description.map((desc) => (<p>{desc}</p>))}
                                </span> : null}

                            {Object.hasOwn(filteredItem, 'logo') ?
                                <span className="logo"> <img src={filteredItem.logo} alt={filteredItem.sectionTitle} /> </span>
                                : null}
                            
                            {Object.hasOwn(filteredItem, 'links') ?
                                <span className="siteLink">
                                {<a href={filteredItem.links[0].link}><button target="_blank">{/* share image */}</button></a>}
                                </span> : null}
                         
                            <span className="routerLink">
                                <a href={"#/page/" + filteredItem.gid}><button target="_blank">{/* info image*/}</button></a>
                            </span>
                            <span className="bookmarks"><button onClick={() => UpdateStorage(filteredItem.gid)}>{<img className = "smallButtonSVG" src = '../imgs/bookmarkButton.svg'></img>}</button></span>
                            </>
                        ))
                    }
                </div>
                </>


            </div>
        </div>

    );

}

export default RouterPage;