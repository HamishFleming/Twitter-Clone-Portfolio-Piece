import React from "react";
import "./App.css";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import MobileNav from "./MobileBottom";
import MediaQuery from 'react-responsive';

function App() {
  return (
    <div className="app">
      <MediaQuery minWidth={401}>
      <Sidebar />
      </MediaQuery>
      <Feed />
      <MediaQuery minWidth={1000}>
      <Widgets />
      </MediaQuery>
      <MediaQuery maxWidth={400}>
      <MobileNav />
      </MediaQuery>
    </div>
  );
}

export default App;
