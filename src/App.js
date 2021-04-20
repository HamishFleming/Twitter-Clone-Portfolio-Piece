import React from "react";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import MediaQuery from 'react-responsive';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Feed />
      <MediaQuery minWidth={1000}>
      <Widgets />
      </MediaQuery>
    </div>
  );
}

export default App;
