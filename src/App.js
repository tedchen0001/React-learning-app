import "./investment-dashboard-light.css";
import Navbar from './components/Navbar/Navbar';
import Selector from "./components/Selector/Selector";
import Charts1 from "./components/Charts/Charts1";
//import Charts from './components/Charts/Charts';

import { useState } from "react";

function App() {
  const [childData, setChildData] = useState("");

  const passData = (data) => {
    setChildData(data);
  };

  return (
    <div className="App">
      <Navbar setNavName={childData} />
      <Charts1 />
      <Selector onSelectChart={passData} />
      
    </div>
  );
}

export default App;
