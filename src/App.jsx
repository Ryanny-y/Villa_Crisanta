import Layout from "./components/layout/Layout";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AuthProvider from "./context/AuthContext";
import BookingProvider from "./context/BookingContext";

export default function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <AuthProvider>
        <Layout />
    </AuthProvider>
  )
}