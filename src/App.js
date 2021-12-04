import "./styles.css";
import React, { useState } from "react";

var imogiDec = {
  "😄": "Smaile",
  "😶": "disbelife",
  "😑": "sad",
  "🥡": "takeout box",
  "💌": "love",
  "😔": "annoyance",
  "❤️": "hart",
  "😡": "anger",
  "🤔": "thinking",
  "🤒": "not well",
  "😘": "love kiss"
};

var emojibyUser = Object.keys(imogiDec);
export default function App() {
  var [meaining, steUserMeaning] = useState("");
  function emojiInput(event) {
    var userInput = event.target.value;
    var meaining = imogiDec[userInput];

    if (meaining === undefined) {
      meaining = "we don't have this in our database";
    }
    steUserMeaning(meaining);
  }

  function emojiClick(emoji) {
    var meaining = imogiDec[emoji];
    steUserMeaning(meaining);
  }

  return (
    <div className="App">
      {/* <nav className="navigetation"></nav> */}

      <h1>Welcome inside out!</h1>
      <input onChange={emojiInput}></input>
      <h2>meaning {meaining}</h2>

      <h3>Emojis we know</h3>

      {emojibyUser.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClick(emoji)}
            style={{ fontSize: "3rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
