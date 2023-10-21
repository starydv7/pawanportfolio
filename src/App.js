import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
function App() {
  const[selectedPage,setSelectedPage]=useState('home');
  const isAboveMediumScreen=useMediaQuery("(min-width:1060px)");
  const [isTopOfPage,setIsTopOfPage]=useState(true);

 useEffect(()=>{
  const handleScroll=()=>{
    if(window.scrollY===0)setIsTopOfPage(true);
    if(window.scrollY!==0)setIsTopOfPage(false);
  }
  window.addEventListener("scroll",handleScroll);
  return()=>window.removeEventListener("scroll",handleScroll);
 },[]);

  return (
    <div className="App bg-deep-blue">
      <Navbar 
       isTopOfPage={isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={selectedPage}/>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreen &&(
          <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          />
        )}
      </div>
    </div>
    
  );
}

export default App;
