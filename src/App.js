import "./App.scss";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Detail from "./pages/Detail";
import PersonDetail from "./pages/PersonDetail";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/personDetails" element={<PersonDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />

      </Routes>
      <Footer />
    </>
  );
};

export default App;
