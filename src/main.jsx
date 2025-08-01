import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/main/Header.jsx";
import Footer from "./components/main/Footer.jsx";

// <StrictMode>
// </StrictMode>
createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <App />
    <Footer />
  </>
);
