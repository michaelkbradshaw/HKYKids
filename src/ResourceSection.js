import React from 'react';
import './Resources.css'
import Resource from "./Resource.js"


/* props.title, props.resoruces,props.updateStorage, props.ids*/

function ResourceSection(props) {

    
    return (
        <section>
            <h2>{props.title}</h2>
            <hr />
            <div className = "cardContainer">
            {props.resources
               .map((resource) => (
           
              <Resource key={resource.gid}
                    activity={resource} 
                  updateStorage={props.updateStorage} 
                  ids={props.ids}
              />
                ))}
            </div>
            </section>
    )
}

export default ResourceSection;