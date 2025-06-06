import React from 'react';
import './Resources.css'
import Resource from "./Resource.js"


/* props.title, props.resoruces,props.updateStorage, props.ids*/

function ResourceSection(props) {

    
    return (
        <section>
            {/*<div className="uniqueTitle"><h2>{props.title}</h2></div>*/}
            <h2>{props.title}</h2>
            <hr />
            <div className = "cardContainer">
            {props.resources
               .map((resource) => (
              <Resource activity={resource} 
                  updateStorage={props.updateStorage} 
                  ids={props.ids}
              />
                ))}
            </div>
            </section>
    )
}

export default ResourceSection;