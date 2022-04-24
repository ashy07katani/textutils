import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import PropTypes from "prop-types";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("rgb(2, 38, 51)");
  const [style, setStyle] = useState({
    color: "rgb(2, 38, 51)",
    backgroundColor: "white",
  });
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const setModeColor = (color) => {
    console.log(color);
    if (mode === "dark") {
      document.body.style.backgroundColor = color;
      setStyle({
        color: "white",
        backgroundColor: color,
      });
      setColor(color);
    }
  };
  const onToggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = color;
      document.body.style.color = "white";
      document.title = "Text Util - DarkMode";
      setStyle({
        color: "white",
        backgroundColor: color,
      });
      setMode("dark");
      showAlert("Dark mode Enabled", "success");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "rgb(2, 38, 51)";
      document.title = "Text Util - LightMode";
      setStyle({ color: "rgb(2, 38, 51)", backgroundColor: "white" });
      setMode("light");
      showAlert("Light mode Enabled", "success");
    }
  };
  return (
    // <Router>
    <div>
      <Navbar
        mode={mode}
        toggleMode={onToggleMode}
        onChangeColor={setModeColor}
      ></Navbar>
      <Alert alert={alert}></Alert>
      {/* <Routes>
          <Route path="/about" element={<About styl={style} />} /> */}

      {/* <Route
            path="/"
            element={ */}
      <Textform
        heading="Enter text to analyse"
        mode={mode}
        showalert={showAlert}
      />
      {/* }
          />
        </Routes> */}
    </div>
    // </Router>
  );
}

export default App;

Textform.propTypes = {
  heading: PropTypes.string,
};
