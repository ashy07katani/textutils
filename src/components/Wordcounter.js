import React from "react";

export default function Wordcounter(props) {
  const wordMap = new Map();
  const wordArray = props.text;
  wordArray.forEach((word) => {
    if (wordMap.get(word) === undefined) {
      wordMap.set(word, 1);
    } else {
      wordMap.set(word, wordMap.get(word) + 1);
    }
  });
  const keys = Array.from(wordMap.keys());
  return (
    <>
      <h3>Count per Word</h3>
      <ol>
        {keys.map((key) => (
          <li key={key}>
            {key}:{wordMap.get(key)}
          </li>
        ))}
      </ol>
    </>
  );
}
