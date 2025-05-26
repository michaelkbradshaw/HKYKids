import React, { useEffect, useState } from 'react';
import './Resources.css'
import Header from './Header.js';
import FavoriteButton from './FavoriteButton.js';


function Resource(props) {


    if (Object.hasOwn(props.activity, 'links') || Object.hasOwn(props.activity, 'logo') )
    {
        
    return (
        <div className="resource">

            <div className="logoLinks">
                {Object.hasOwn(props.activity, 'logo') ?
                            <span className="logo"> <img src={props.activity.logo} alt={props.activity.sectionTitle} /> </span>
                            : null}


                <span className="links">
                {Object.hasOwn(props.activity, 'links') ?
                    <span className="siteLink">
                        {<a href={props.activity.links[0].link}><button target="_blank"><img className = "smallButtonSVG" src = '../imgs/newPageButton.svg'></img></button></a>}
                    </span> : null}
                    

                    <FavoriteButton 
                        activity={props.activity} 
                        updateStorage={props.updateStorage} 
                        isFavorite={props.ids.includes(props.activity.gid)}
                    />

                    
                    <span className="shareLink">
                        <a href={"#/page/" + props.activity.gid}><button target="_blank">{<img className = "smallButtonSVG" src = '../imgs/infoButton.svg'></img>}</button></a>
                    </span>
                </span>
            </div>
                    {Object.hasOwn(props.activity, 'description') && props.activity.description != "" ?
                        <span className="description">
                            {props.activity.description.map((desc) => (<p>{desc}</p>))}
                        </span> : null}
        </div>
    )
    }
    else
    {
    return (
    <div className="resource onlyText">
        {Object.hasOwn(props.activity, 'description') && props.activity.description != "" ?
        <span className="text">
        {props.activity.description.map((desc) => (<p>{desc}</p>))}
        </span> : null}
    </div>
    )
    }
     
}

export default Resource;