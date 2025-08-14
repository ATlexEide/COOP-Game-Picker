import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/nuxt";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Main/Header.jsx";
import Footer from "./components/Main/Footer.jsx";

// <StrictMode>
// </StrictMode>
createRoot(document.getElementById("root")).render(
  <>
    <Analytics />
    <Header />
    <App />
    <Footer />
  </>
);
