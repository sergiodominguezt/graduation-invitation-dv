import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Banner from "./banner/Banner";
import Invitation from "./invitation/Invitation";
import Memories from "./memories/Memories";
import EventDetails from "./details/EventDetails";
import ScrollDownArrow from "./scrolldown/ScrollDown";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Banner />
    <Invitation />
    <Memories />
    <EventDetails />
  </React.StrictMode>
);

reportWebVitals();
