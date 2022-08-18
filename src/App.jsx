import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./ComponentJSX/Footer/Footer";
import Header from "./ComponentJSX/Header/Header";
import Main from "./ComponentJSX/Main/Main";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import Public from "./pages/Public/Public";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/*" element={<Public />} />
        <Route exact path="/profile*" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
