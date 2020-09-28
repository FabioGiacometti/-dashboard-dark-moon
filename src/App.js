import React, { useState, useEffect } from "react";
import "./global.css";
import Header from "./header";
import TopCardList from "./top-card-list";
import Overview from "./overview";
import Switch from "./switch";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  function changeMedia(mq) {
    setDarkMode(mq.matches);
    setIsChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", changeMedia);
    setDarkMode(mq.matches);
    setIsChecked(mq.matches);
  }, []);

  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={isChecked}
          setIsChecked={setIsChecked}
        />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
