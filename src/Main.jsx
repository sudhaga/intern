import { createRoot } from "react-dom/client";
import './index.css';
import { StrictMode } from "react";
import HEADER from "./assets/componet/HEADER/Header";
import Component from "./assets/componet/Main/component";
import Footer from "./assets/componet/Footer/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HEADER />
    <Component />
    <Footer />
  </StrictMode>
);
