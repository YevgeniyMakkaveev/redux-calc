import "./App.scss";
import { useState } from "react";
import Display from "../display";
import Buttons from "../buttons";

function App() {
  const [colourTheme, setTheme] = useState("theme__blue");

  const ratioMaker = (themeName, label) => {
    return (
      <div className="theme__wrap">
        <label htmlFor={themeName}> {label}</label>
        <div className={`theme__radio ${themeName}__selector`}>
          <input
            id={themeName}
            type="radio"
            checked={themeName === colourTheme}
            onChange={() => {
              setTheme(themeName);
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={`app ${colourTheme}`}>
      <div className="app__wrap">
        <div className="head">
          <div className="head__label">
            <h2 className="label__text big__label">calc</h2>
          </div>
          <div className="theme__control">
            <h4 className="label__text text__theme">THEME</h4>
            {ratioMaker("theme__blue", 1)}
            {ratioMaker("theme__brown", 2)}
            {ratioMaker("theme__purple", 3)}
          </div>
        </div>
        <Display />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
