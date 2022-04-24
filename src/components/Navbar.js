import React, { useState } from "react";
// import { Link } from "react-router-dom";
export default function Navbar(props) {
  const [color,setColor] = useState("rgb(2, 38, 51)")
  
  const colorstyle = {
    width:"100px",
    height:"10px"
  }
  const onChangeColor = (e)=>
  {
    console.log(e.target.value)
    setColor(e.target.value)
    props.onChangeColor(e.target.value)
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Text Utils
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <div>
              <input type="color" name="colorpicker" id="colorpicker" value={color} style={colorstyle} onChange={onChangeColor}/>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label text-${
                    props.mode === "light" ? "dark" : "light"
                  }`}
                  htmlfor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
