import React, { useEffect, useState } from 'react';
import './Resources.css'
import Header from './Header.js';

//data = {kykidsData} sectionGid = {bookmarkGids} headerText="Bookmarks"
function Bookmarks(props) {
    let uniqueTitles = []

    const storedIds = JSON.parse(localStorage.getItem('ids')) || [];
    const [ids, setIds] = useState(storedIds);

    useEffect(() => {

        localStorage.setItem('ids', JSON.stringify(ids));
        console.log(storedIds);
    }, [ids])


    const UpdateStorage = (gid) => {
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
            <div class="splitResources">
            <div className = "cardContainer">
                {ids.map((gid, index) => (
                    <>
                        {props.data
                            .filter((item) => item.gid === gid)
                            .map((filteredItem) => (
                                <>
                                    {
                                        Object.hasOwn(filteredItem, 'links') || Object.hasOwn(filteredItem, 'logo') ?
                                                
                                                
                                        <div className="oneProgram">
                                            
                                            {/* Commented out links, will move to router page */}
                                            {/* {Object.hasOwn(filteredItem, 'links') ?
                                                <span className="links">
                                                    {filteredItem.links.map((link) => <a href={link.link}><button target="_blank">{link.text}</button></a>)}
                                                </span> : null} */}
                                            {Object.hasOwn(filteredItem, 'description') && filteredItem.description != "" ?
                                                <span className="text">
                                                    {filteredItem.description.map((desc) => (<p>{desc}</p>))}
                                                </span> : null}
                                            <div className="logoLinks">  
                                            {Object.hasOwn(filteredItem, 'logo') ?
                                                <span className="logo"> <img src={filteredItem.logo} alt={filteredItem.sectionTitle} /> </span>
                                                : null}
                                            <span className="links">
                                            {Object.hasOwn(filteredItem, 'links') ?
                                                <span className="siteLink">
                                                    {<a href={filteredItem.links[0].link}><button target="_blank"><img className = "smallButtonSVG" src = '../imgs/newPageButton.svg'></img></button></a>}
                                                </span> : null}
                                                
                                            <span className="shareLink">
                                                <a href={"#/page/" + filteredItem.gid}><button target="_blank">{<img className = "smallButtonSVG" src = '../imgs/infoButton.svg'></img>}</button></a>
                                            </span>
                                            <span className="bookmarks"><button onClick={() => UpdateStorage(filteredItem.gid)}>{<img className = "smallButtonSVG" src = '../imgs/bookmarkButton.svg'></img>}</button></span>
                                            </span>
                                            </div> 
                                        </div>
                                        :
                                        <div className="onlyText">
                                            {Object.hasOwn(filteredItem, 'description') && filteredItem.description != "" ?
                                                <span className="text">
                                                    {filteredItem.description.map((desc) => (<p>{desc}</p>))}
                                                </span> : null}
                                        </div>
                                    }
                                </>
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