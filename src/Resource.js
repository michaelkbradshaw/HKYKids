import React from 'react';
import FavoriteButton from './FavoriteButton.js';
import ResourceLink from './ResourceLink.js';
function Resource(props) {


    if (Object.hasOwn(props.activity, 'links') || 
            Object.hasOwn(props.activity, 'logo') )
    {
        
    return (
        <div className="resource">

            <div className="logoLinks">
                {Object.hasOwn(props.activity, 'logo') ?
                            <span className="logo"> <img src={props.activity.logo} alt={props.activity.sectionTitle} /> </span>
                            : null}


                <span className="buttons">
                
                    <FavoriteButton 
                        gid={props.activity.gid} 
                        updateStorage={props.updateStorage} 
                        isFavorite={props.ids.includes(props.activity.gid)}
                    />
                </span>
            </div>
           
            
            

            {Object.hasOwn(props.activity, 'description') && props.activity.description !== "" ?
                <span className="description">
                    {props.activity.description.map((desc,index) => (
                    <p key={"p"+props.activity.gid+"_"+index}>{desc}</p>))}
                </span> : null}

            {Object.hasOwn(props.activity, 'links') ?
            <div className="links">
                {props.activity.links.map(
                    (link) => 
                        <ResourceLink 
                        key={link.link}
                        activity={props.activity} link={link} />
                    )}
            </div> 
            : null}

            {Object.hasOwn(props.activity, 'phone') ?
            <div className="phone">
                <a href={"tel:"+props.activity.phone}>{props.activity.phone} </a>
            </div>
            :null}

        </div>
    )
    }
    else
    {
    return (
    <div className="resource onlyText">
        {Object.hasOwn(props.activity, 'description') && props.activity.description !== "" ?
        <span className="text">
        {props.activity.description.map((desc,index) => (
        <p key={"p"+props.activity.gid+"_"+index}>{desc}</p>))}
        </span> : null}
    </div>
    )
    }
     
}

export default Resource;