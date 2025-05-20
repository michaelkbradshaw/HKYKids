import React, { useEffect, useState } from 'react';
import './Resources.css'
import Header from './Header.js';


function Resource(props) {


    return (
        <>          
            {Object.hasOwn(props.activity, 'links') || Object.hasOwn(props.activity, 'logo') ?
                <div className="resource">
                                                    
                    {/* Commented out links, will move to router page */}
                    {/* {Object.hasOwn(filteredItem, 'links') ?
                        <span className="links">
                            {filteredItem.links.map((link) => <a href={link.link}><button target="_blank">{link.text}</button></a>)}
                        </span> : null} */}
                    {Object.hasOwn(props.activity, 'description') && props.activity.description != "" ?
                        <span className="text">
                            {props.activity.description.map((desc) => (<p>{desc}</p>))}
                        </span> : null}
                    <div className="logoLinks">  
                    {Object.hasOwn(props.activity, 'logo') ?
                        <span className="logo"> <img src={props.activity.logo} alt={props.activity.sectionTitle} /> </span>
                        : null}
                    <span className="links">
                    {Object.hasOwn(props.activity, 'links') ?
                        <span className="siteLink">
                            {<a href={props.activity.links[0].link}><button target="_blank"><img className = "smallButtonSVG" src = '../imgs/newPageButton.svg'></img></button></a>}
                        </span> : null}
                        
                    <span className="shareLink">
                        <a href={"#/page/" + props.activity.gid}><button target="_blank">{<img className = "smallButtonSVG" src = '../imgs/infoButton.svg'></img>}</button></a>
                    </span>
                    <span className="bookmarks"><button onClick={() => props.updateStorage(props.activity.gid)}>{<img className = "smallButtonSVG" src = '../imgs/bookmarkButton.svg'></img>}</button></span>
                    </span>
                    </div> 
                </div>
                :
                <div className="resource onlyText">
                    {Object.hasOwn(props.activity, 'description') && props.activity.description != "" ?
                        <span className="text">
                            {props.activity.description.map((desc) => (<p>{desc}</p>))}
                        </span> : null}
                </div>
            }
        </>)

}

export default Resource;