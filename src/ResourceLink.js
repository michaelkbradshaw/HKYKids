import React from 'react';
import ShareButton from './ShareButton.js';
import CopyButton from './CopyButton.js';
import './css/ResourceLink.css';
/*props activity, link*/
function ResourceLink(props) {

    return (

<div className="resourceLink">
    <a key={props.link.link} href={props.link.link}> 
        <div className="linkDiv"> {props.link.text}</div>
    </a>        
           
            {/*    <button target="_blank">{props.link.text}</button>*/}
            

            <div className="linkActions">

                <CopyButton text={props.link.link} />

                <ShareButton
                    activity={props.activity}
                />
            </div>
        </div>

    );
}           

export default ResourceLink;