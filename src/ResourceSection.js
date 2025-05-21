import React, { useEffect, useState } from 'react';
import './Resources.css'
import Header from './Header.js';
import Resource from "./Resource.js"


/* props.title, props.resoruces,props.updateStorage*/

function ResourceSection(props) {

    
    return (
        <>
            <div className="uniqueTitle"><h2>{props.title}</h2></div>
            <div className = "cardContainer">
            {props.resources
               .map((resource) => (
              <Resource activity={resource} updateStorage={props.updateStorage} />
                ))}
            </div>
                    </>
    )
}

export default ResourceSection;