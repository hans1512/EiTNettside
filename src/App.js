import "./App.css";
import React, { useState } from "react";
import Page1 from "./pages/page1";
import BasicTabs from "./components/tabs";
import TabsFilled from "./components/TabsFilled";


function App() {
  const [CurrentTab, SetCurretenTab] = React.useState()

  const handleChangeTabs = (event, value) => {
    SetCurretenTab(value)
  }

  const [data, setData] = useState('');
  
  const childToParent = (childdata) => {
    setData(childdata);
  }
  return (
    
    <div>
    <h1>SAF</h1>
      <TabsFilled />
    </div>
  );
}

export default App;
