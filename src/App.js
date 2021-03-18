import React, {  useState } from "react";
import ReactTooltip from "react-tooltip";
import Header from "./components/Header";

import MapChart from "./components/MapChart";

const App = () => {
  const [content, setContent] = useState("");
  return (
    <div>
      <Header/>
      <ReactTooltip>{content}</ReactTooltip>
      <MapChart setTooltipContent={setContent} />
      
    </div>
  );
}

export default App;
