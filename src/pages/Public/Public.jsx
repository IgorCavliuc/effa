import { Routes, Route } from "react-router-dom";
import Footer from "../../ComponentJSX/Footer/Footer";
import Header from "../../ComponentJSX/Header/Header";
import Main from "../../ComponentJSX/Main/Main";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import "./Public.css";

function Public() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="signin" element={<SignIn />} />
        <Route exact path="signup" element={<SignUp />} />
        <Route exact path="/" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Public;
