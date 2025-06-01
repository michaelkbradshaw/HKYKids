import React from 'react';
import FavoriteButton from './FavoriteButton.js';
import ShareButton from './ShareButton.js';

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

                    <ShareButton
                        activity={props.activity}
                    />

                </span>
            </div>
           
            
            

            {Object.hasOwn(props.activity, 'description') && props.activity.description !== "" ?
                <span className="description">
                    {props.activity.description.map((desc) => (<p>{desc}</p>))}
                </span> : null}

                {Object.hasOwn(props.activity, 'links') ?
            <div className="links">
                {props.activity.links.map(
                    (link) => <a href={link.link}>
                        <button target="_blank">{link.text}</button>
                    </a>)}
            </div> 
            : null}

        </div>
    )
    }
    else
    {
    return (
    <div className="resource onlyText">
        {Object.hasOwn(props.activity, 'description') && props.activity.description !== "" ?
        <span className="text">
        {props.activity.description.map((desc) => (<p>{desc}</p>))}
        </span> : null}
    </div>
    )
    }
     
}

export default Resource;