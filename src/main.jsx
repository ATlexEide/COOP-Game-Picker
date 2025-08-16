import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Main/Header.jsx";
import Footer from "./components/Main/Footer.jsx";

// <StrictMode>
// </StrictMode>
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Analytics />
    <App />
    <Footer />
  </StrictMode>
);
