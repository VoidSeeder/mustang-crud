import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./AppRoutes";
import { Header } from "./components";
import theme from "./designSystem";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <AppRoutes>
        <Header />
      </AppRoutes>
    </ThemeProvider>
  </React.StrictMode>
);
