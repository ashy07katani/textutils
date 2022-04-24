import React, { useState } from "react";
import Textsummary from "./Textsummary";
export default function Textform(props) {
  // states and variables
  const [text, setText] = useState("");
  const [showCounter, setShowCounter] = useState(false);

  //handlers
  const isTextEmpty = () => {
    return text === "";
  };
  const onUpClickHandler = () => {
    console.log("you clicked the button" + text);
    const upText = text.toUpperCase();
    setText(upText);
    isTextEmpty()
      ? props.showalert("Text is Empty", "danger")
      : props.showalert("Converted to Upper Case", "success");
  };
  const onLoClickHandler = () => {
    console.log("you clicked the button" + text);
    const upText = text.toLowerCase();
    setText(upText);
    isTextEmpty()
      ? props.showalert("Text is Empty", "danger")
      : props.showalert("Converted to Lower Case", "success");
  };
  const onChangeHandler = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };
  const onClearClickHandler = () => {
    setText("");
    isTextEmpty()
      ? props.showalert("Text is Empty", "danger")
      : props.showalert("Text Cleared Successfully", "success");
  };
  const onShowCounterHandler = () => {
    setShowCounter(true);
  };
  const onCopyHandler = () => {
    let copyText = document.getElementById("exampleFormControlTextarea1");
    navigator.clipboard.writeText(copyText.value);
    isTextEmpty()
      ? props.showalert("Text is Empty", "danger")
      : props.showalert("Text Copied Successfully", "success");
  };
  const onRemoveExtraWS = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    isTextEmpty()
      ? props.showalert("Text is Empty", "danger")
      : props.showalert("Extraspaces Removed Successfully", "success");
  };

  return (
    <div className="container my-3">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <div className="container my-3"></div>
        <textarea
          className="form-control my-3"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={onChangeHandler}
          style={{
            backgroundColor: props.mode === "light" ? "white" : "rgba(2, 38, 51,0.5)",
            color: props.mode === "light" ? "rgb(2, 38, 51)" : "white",
          }}
        ></textarea>
        <button className="btn btn-primary" onClick={onUpClickHandler}>
          Uppercase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={onLoClickHandler}>
          Lowercase
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={onClearClickHandler}>
          Clear
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={onShowCounterHandler}>
          Show Counter
        </button>

        <button className="btn btn-primary mx-3 my-1" onClick={onCopyHandler}>
          Copy
        </button>
        <button className="btn btn-primary mx-3 my-1" onClick={onRemoveExtraWS}>
          Remove Extra WhiteSpaces
        </button>
      </div>
      <Textsummary text={text} showCount={showCounter}></Textsummary>
    </div>
  );
}
