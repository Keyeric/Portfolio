import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Blog from "./components/Blog";
import Media from "./components/Media";
import Footer from "./components/Footer";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

const theme = createMuiTheme({
  status: {
    white: "#fff8f0",
    red: "#990000",
    redShadow: "#53131e",
    black: "black",
    orange: "#e48400",
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <About />
        <Blog />
        <Media />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
