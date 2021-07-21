import React from "react";
import "./App.style.scss";

import Header from "../Header/Header.component";
import MainContent from "../MainContent/MainContent.component";

import { useRecoilValue } from "recoil";
import { darkModeState } from "../shared/globalState";

const App = () => {
  const isDarkModeEnabled = useRecoilValue(darkModeState);

  return (
    <div className={`App ${isDarkModeEnabled ? "App--dark-mode" : ""}`}>
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
