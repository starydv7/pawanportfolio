import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
function App() {
  const[selectedPage,setSelectedPage]=useState('home');
  const isAboveMediumScreen=useMediaQuery("(min-width:1060px)");

  return (
    <div className="App bg-deep-blue">
      <Navbar selectedPage={selectedPage}
      setSelectedPage={selectedPage}/>
    </div>
  );
}

export default App;
