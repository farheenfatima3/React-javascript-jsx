import "./styles.css";
import React, { useState } from "react";
var emojidictionary = {
  "⛰️": "mountain",
  "🗻": "mount fuji",
  "🌋": "volcano",
  "🏯": "japanese castle",
  "🗽": "statue of liberty"
};
var emojiarray = Object.keys(emojidictionary);
export default function App() {
  const [defination, setDefination] = useState("");
  function userInputHandler(event) {
    var userInput = event.target.value;
    var defination = emojidictionary[userInput];
    setDefination(defination);
  }
  function onClickHandler(emoji) {
    var defination = emojidictionary[emoji];
    setDefination(defination);
  }
  return (
    <div className="App">
      <h1>Know the meaning of emojis!!</h1>
      <input onChange={userInputHandler}></input>
      <h2>Meaning</h2>
      <h2>{defination}</h2>
      {emojiarray.map(function (emoji) {
        return (
          <span
            onClick={() => {
              onClickHandler(emoji);
            }}
            style={{ fontSize: "larger", padding: "0.5rem", cursor: "pointer" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
