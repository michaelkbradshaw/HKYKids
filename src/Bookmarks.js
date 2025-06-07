import React, { useEffect, useState } from 'react';
import './Resources.css'
import Header from './Header.js';
import Resource from './Resource.js'

//data = {kykidsData} sectionGid = {bookmarkGids} headerText="Bookmarks"
function Bookmarks(props) {
    let uniqueTitles = []

    const storedIds = JSON.parse(localStorage.getItem('ids')) || [];
    const [ids, setIds] = useState(storedIds);

    useEffect(() => {

        localStorage.setItem('ids', JSON.stringify(ids));
    }, [ids])


    const updateStorage = (gid) => {
        setIds(() => ids.filter((id) => id !== gid))
    }





    for (let object of props.data) {
        for (let gid of ids) {
            if (object.gid === gid && uniqueTitles.indexOf(object.sectionTitle) === -1) {
                uniqueTitles.push(object.sectionTitle);
            }
        }
    }

    return (
        <div className="Resources">
            <Header name={props.headerText} />
            <div className="content">
            <div className="note">
                All the activities you starred will be listed here.
            </div>
            <div className = "cardContainer">
                {ids.map((gid, index) => (
                    <>
                        {props.data
                            .filter((item) => item.gid === gid)
                            .map((filteredItem) => (
                                <Resource activity={filteredItem} 
                                    updateStorage={updateStorage}
                                    ids={ids}
                                    />        
                            ))}
                    </>
                )
                )}
                </div>
            </div>
        </div>
    );

}

export default Bookmarks;