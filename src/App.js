import "./App.css";
import React, { useState } from "react";
import Page1 from "./pages/page1";
import BasicTabs from "./components/tabs";



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
      {data}
      <BasicTabs childToParent={childToParent}/>
      <div>
        <Page1 />
      </div>
    </div>
  );
}

export default App;
