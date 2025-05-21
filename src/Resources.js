import React, { useEffect, useState } from 'react';
import './Resources.css'
import Header from './Header.js';
import ResourceSection from "./ResourceSection.js"


/* props.data, props.sectionIds, props.headerText*/

function Resources(props) {

    let uniqueTitles = []
    console.log("props.data", props.data);

    const storedIds = JSON.parse(localStorage.getItem('ids')) || [];
    const [ids, setIds] = useState(storedIds)
  
    useEffect(() => {
        
        localStorage.setItem('ids', JSON.stringify(ids));
        console.log(storedIds);
    }, [ids])

    for (let object of props.data) {
        for (let id of props.sectionIds) {
            if (object.sectionId === id && uniqueTitles.indexOf(object.sectionTitle) === -1) {
                uniqueTitles.push(object.sectionTitle);
            }
        }
    }


  const updateStorage = (gid) => {
    let exists = false;
    for (let id of ids) {
        if (gid == id) {
            exists = true;
        }
    }
    if (exists == false) {
        console.log("UPDATE STORAGE RUNNING")
        setIds([...ids, gid])
        gid = ''
    }
}



    console.log("uniqueTitles", uniqueTitles)
    console.log("props", props.data)

    return (
        <div className="Resources">
            <Header name={props.headerText} />
            <div class="splitResources">
                {props.sectionIds.map((id, index) => (
                    <ResourceSection title={uniqueTitles[index]}
                        updateStorage={updateStorage} 
                        resources={props.data
                            .filter((item) => item.sectionId === id)}
                        />
                )
                )}

            </div>
        </div>
    );

}

export default Resources;