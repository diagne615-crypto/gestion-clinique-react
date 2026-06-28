import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { ClinicProvider } from "./Context/ClinicContext";
import { ThemeProvider } from "./Context/ThemeContext";

import "./styles/global.css";
import "./styles/dark.css";
import {ToastContainer} from "react-toastify";

<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop
  closeOnClick
  pauseOnHover
  draggable
  theme="colored"
/>

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <ClinicProvider>
        <App />
      </ClinicProvider>
    </ThemeProvider>

  </BrowserRouter>
);