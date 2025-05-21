import React, { useEffect, useState } from 'react';
import './Resources.css'
import Header from './Header.js';
import Resource from "./Resource.js"


/* props.title, props.resoruces,props.updateStorage*/

function ResourceSection(props) {

    
    return (
        <section>
            {/*<div className="uniqueTitle"><h2>{props.title}</h2></div>*/}
            <h2>{props.title}</h2>
            <div className = "cardContainer">
            {props.resources
               .map((resource) => (
              <Resource activity={resource} updateStorage={props.updateStorage} />
                ))}
            </div>
            </section>
    )
}

export default ResourceSection;