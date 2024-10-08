// src/App.js

import "./App.css";
import Navbar from "../src/components/Shared/Navbar";
import Footer from "../src/components/Shared/Footer";
import { Outlet } from "react-router-dom";
import { AuthProvider } from './components/Shared/AuthContext';
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

function App() {
  return (
    <AuthProvider>
    <KindeProvider
    clientId={import.meta.env.VITE_KINDE_CLIENT_ID}
    domain={import.meta.env.VITE_KINDE_DOMAIN}
    redirectUri={import.meta.env.VITE_KINDE_REDIRECT_URI}
    logoutUri={import.meta.env.VITE_KINDE_LOGOUT_REDIRECT_URI}
  >
    <Navbar />
    <Outlet />
    <Footer />
  </KindeProvider>
  </AuthProvider>

  );
}

export default App;