import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import pages from "./pages";

type Props = {
  children?: React.ReactNode;
};

export default function AppRoutes({ children }: Props) {
  return (
    <Router>
      {children}
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
