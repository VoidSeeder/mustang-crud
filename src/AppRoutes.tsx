import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import pages from "./pages";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {Object.keys(pages).map((key) => (
          <Route
            path={key.toLowerCase()}
            element={React.createElement(pages[key as keyof typeof pages])}
          />
        ))}
      </Routes>
    </Router>
  );
}
