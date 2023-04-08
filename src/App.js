import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import PersonDetail from "./pages/PersonDetail";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import Search from "./pages/Search";
import { AuthContextProvider } from "./context/AuthContext";
import PopUp from "./components/PopUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDash from "./pages/AdminDash";

const App = () => {
  return (
    <>
      <ToastContainer />
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/personDetails" element={<PersonDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/test" element={<PopUp />} />

          <Route path="/admin" element={<AdminDash />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
