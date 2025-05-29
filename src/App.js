import React, { useEffect, useState} from 'react'; 
import { Route, Routes} from "react-router-dom";
import Bookmarks from './Bookmarks.js';
import Resources from './Resources.js';
import Header from './Header.js';
import RouterPage from './RouterPage.js';


function App() {
  const [kykidsData, setData] = useState([]);
  useEffect(()=> {
    fetch("kykids.json")
    .then( (data) => data.json())
    .then( (json) => {
        console.log("response", json);
        setData(json);

        
    })
  }, [])
  let allSectionIds = kykidsData.map((object) => object.sectionId)

  let homeSectionIds= ["mission", "members"] 
  let activitiesSectionIds =["programs", "AtHome", "kids-and-parents", "kidAdventures"]
  let childcareSectionIds = ["childcare", "poviders"]
  let preschoolSectionIds = ["HeadstartSection", "PublicPreschool", "PrivatePreschool"]
  let supportSectionIds = ["whatToDo", "AddressConcerns", "newParents", "therapy", "caregivers" ]
  let donateSectionIds= ["funding"] 
  let otherSectionIds = []


  for(let object of allSectionIds){
      if (otherSectionIds.indexOf(object)===-1 && homeSectionIds.indexOf(object)===-1 && activitiesSectionIds.indexOf(object)===-1 && childcareSectionIds.indexOf(object)===-1 && preschoolSectionIds.indexOf(object)===-1 && supportSectionIds.indexOf(object)===-1 && donateSectionIds.indexOf(object)===-1){
        otherSectionIds.push(object);
      }
  }

  console.log("OTHERIDs", otherSectionIds);

  /*Bookmark Data*/
  const storedIds = JSON.parse(localStorage.getItem('ids')) || [];
  const [ids, setIds] = useState(storedIds);

    useEffect(() => {
        localStorage.setItem('ids', JSON.stringify(ids));
    }, [ids])

    function updateStorage(gid) 
    {
        console.log("ids are?",ids);
        if (ids.includes(gid)) 
        {
            setIds(ids.filter( (id) => {return id !== gid }));
        }
        else 
            { setIds([...ids, gid]); }
    }





  return (
    <div>
      <Routes>
        <Route path ="/" element ={
            <Resources data = {kykidsData} sectionIds = {homeSectionIds} 
            ids={ids} updateStorage={updateStorage}
            headerText="Heart of KY Kids" />} />

        <Route path ="/activities" element ={
            <Resources data = {kykidsData} sectionIds = {activitiesSectionIds} 
            ids={ids} updateStorage={updateStorage}
            headerText="Activities" />} />

        <Route path ="/childcare" element ={
            <Resources data = {kykidsData} sectionIds = {childcareSectionIds}
            ids={ids} updateStorage={updateStorage}
            headerText="Childcare" />} />
        
        <Route path ="/preschool" element ={
            <Resources data = {kykidsData} sectionIds = {preschoolSectionIds} 
            ids={ids} updateStorage={updateStorage}
            headerText="Preschool" />} />

        <Route path ="/support" element ={
            <Resources data = {kykidsData} sectionIds = {supportSectionIds} 
            ids={ids} updateStorage={updateStorage}
            headerText="Support" />} />

        <Route path ="/favorites" element ={
            <Bookmarks data = {kykidsData} headerText="Favorites" 
            ids={ids} updateStorage={updateStorage}
            />} />

        <Route path ="/other" element ={
            <Resources data = {kykidsData} sectionIds = {otherSectionIds} 
            ids={ids} updateStorage={updateStorage}
            headerText="Other" />} />
        
        <Route path ="/donate" element ={
            <Resources data = {kykidsData} sectionIds = {donateSectionIds} 
            ids={ids} updateStorage={updateStorage}
            headerText="Donate" />} />

        <Route path ="/page/:programId" element = {
            <RouterPage data = {kykidsData} 
            ids={ids} updateStorage={updateStorage}/>} />

        <Route path ="*" element ={<Header name="Page Not Found" />} />
      </Routes>
    </div>
  );
}

export default App;