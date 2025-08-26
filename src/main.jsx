import { Analytics } from "@vercel/analytics/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import Header from "./components/Main/Header.jsx";
import Footer from "./components/Main/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Analytics />
    <Header />
    <App />
    <Footer />
  </StrictMode>
);
