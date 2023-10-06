// import React from 'react';
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

const rootDiv = document.getElementById("root");
const root = ReactDOM.createRoot(rootDiv); // target the root
root.render(
    // <React.StrictMode>
    <App />
    // </React.StrictMode>
);
