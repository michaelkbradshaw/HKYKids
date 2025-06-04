import React from 'react';
import './Resources.css'
import Header from './Header.js';
import Footer from './Footer.js';
import ResourceSection from "./ResourceSection.js"


/* props.data, props.sectionIds, props.headerText,props.ids,props.updateStorage*/

function Resources(props) {

    let uniqueTitles = []
     
    for (let object of props.data) {
        for (let id of props.sectionIds) {
            if (object.sectionId === id && uniqueTitles.indexOf(object.sectionTitle) === -1) {
                uniqueTitles.push(object.sectionTitle);
            }
        }
    }

    console.log("Resources",props);
    
    return (
        <div className="Resources">
            <Header name={props.headerText} />
            <div className="content">
                {props.sectionIds.map((id, index) => (
                    <ResourceSection title={uniqueTitles[index]}
                        updateStorage={props.updateStorage} 
                        ids={props.ids}
                        resources={props.data
                            .filter((item) => item.sectionId === id)}
                        />
                )
                )}
            </div>
            <Footer />
            </div>
    );

}

export default Resources;