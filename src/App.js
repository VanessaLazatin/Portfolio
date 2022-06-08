import React from "react";
import REACTDOM from "react-dom/client";
import DownButton from "./downbutton";
import "./App.css";
import mypicture from "./image/vanessaSmall.jpg";
function App() {
  return (
    <div className="App">
      <div className="container">
        <DownButton />
        <img src={mypicture} className="mypicture" alt="mypicture" />
        <div id="toptitle" className="title">
          Hi{" "}
        </div>
        <div id="sndtitle" className="title">
          I'm Vanessa
        </div>
        <div id="rdtitle" className="title">
          React Developer
        </div>
        <div id="myline"></div>
      </div>

      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Hi I'm Vanessa
      </a>
    </div>
  );
}

export default App;
