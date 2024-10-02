import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/carousel.css";
import "./styles/headerAnimation.css";
import "./styles/navbar.css";
import "./styles/loginForm.css";
import "./styles/allMoviesScreen.css";
import { BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./constants/context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
