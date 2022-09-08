import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AdviceContextProvider } from "./context/AdviceContext";

ReactDOM.createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <AdviceContextProvider>
         <App />
      </AdviceContextProvider>
   </React.StrictMode>
);

