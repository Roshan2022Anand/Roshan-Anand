import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/montserrat/800.css";
import "@fontsource/roboto-mono/400.css";
import "@fontsource/inter/400.css";
import Mouse from "./components/Mouse.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Mouse />
    <App />
  </StrictMode>
);
