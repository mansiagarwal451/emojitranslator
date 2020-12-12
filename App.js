import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🙂": "happy",
  "😇": "blessed",
  "😂": "laughing",
  "🥳": "party",
  "😔": "sad",
  "🥰": "smiling with heart",
  "": ""
};

var emojiswithus = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>inside out!!</h1>
      <input onChange={emojiInputHandler} />
      <h3>{meaning}</h3>
      <h2>Emojis with us</h2>
      {emojiswithus.map(function (emoji) {
        return (
          <h1
            onClick={() => emojiClickHandler(emoji)}
            style={{ display: "inline", padding: "1rem" }}
            key={emoji}
          >
            {emoji}
          </h1>
        );
      })}
    </div>
  );
}
