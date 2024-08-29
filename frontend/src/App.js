import Login from "./components/login";
import './index.css';  // or './App.css' depending on your setup
import SignUp from "./components/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing";
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import ComingSoon from "./components/soon";

function App() {
  return (
    <>
  {/* <Navbar /> */}
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LandingPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/soon' element={<ComingSoon />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
