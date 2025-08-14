import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Main/Header.jsx";
import Footer from "./components/Main/Footer.jsx";

// <StrictMode>
// </StrictMode>
createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);
