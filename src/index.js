import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import ScrollBodyProvider from "./contexts/ScrollBodyProvider";
import ViewPortProvider from "./contexts/ViewPortProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ViewPortProvider>
      <ScrollBodyProvider>
        <App />
      </ScrollBodyProvider>
    </ViewPortProvider>
  </React.StrictMode>
);
