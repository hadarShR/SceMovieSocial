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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDash from "./pages/AdminDash";
import { useLocation } from "react-router-dom";
import ActiveUsers from "./pages/ActiveUsers";
import UserProfile from "./pages/UserProfile";

const App = () => {
  const location = useLocation();
  return (
    <>
      <ToastContainer />
      <AuthContextProvider>
        {location.pathname !== "/admin" &&
          location.pathname !== "/activeusers" && <Navbar />}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/personDetails" element={<PersonDetail />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin" element={<AdminDash />} />
          <Route path="/activeusers" element={<ActiveUsers />} />
          <Route path="/userprofile" element={<UserProfile />} />
        </Routes>
        {location.pathname !== "/admin" &&
          location.pathname !== "/activeusers" && <Footer />}
      </AuthContextProvider>
    </>
  );
};

export default App;
