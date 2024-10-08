// src/App.js
import "./App.css";
import Navbar from "../src/components/Shared/Navbar";
import Footer from "../src/components/Shared/Footer";
import { Outlet } from "react-router-dom";
import BackToTopButton from "./components/Shared/BackToTopButton";

function App() {
  return (
    <>
      <BackToTopButton />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;