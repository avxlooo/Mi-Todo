import react from "react";
import reactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

// components and CSS
import App from "./App";
import "./css/index.css";

reactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
