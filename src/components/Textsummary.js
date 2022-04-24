import React, { useState } from "react";
import Wordcounter from "./Wordcounter";

export default function Textsummary(props) {
  //this is done to remove white spaces and ignore the empty char. which is considered otherwise.
  const txtarr = props.text.split(" ").filter((e)=>{return (e.length > 0)})
  const wordscount = txtarr.length;
  
  return (
    <div>
      <h3>Text Summary</h3>
      <div className="mt-3 container">
        <p>
          Words Entered: <span>{wordscount}</span>
        </p>
        <p>
          Characters Entered: <span>{props.text.length}</span>
        </p>
        <p>
          Time required to read: <span>{wordscount * 0.008}</span> minutes
        </p>
      </div>

      <h3>Text Preview</h3>
      {wordscount !== 0 ? (
        <div className="mt-3 container">
          <p>{props.text}</p>
        </div>
      ) : (
        <div className="mt-3 container">
          {" "}
          <p className="bt-3 mt-3">No words entered yet</p>{" "}
        </div>
      )}

      {props.showCount && wordscount !== 0 ? (
        <div className="bt-3 mt-3">
          <Wordcounter text={txtarr}></Wordcounter>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
