import "./app.scss"
import Home from "./home/Home";
import Anime from "./anime/Anime";
import Login from "./login/Login";
import Register from "./register/Register";
import Settings from "./settings/Settings";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// Default route is home
function App(){
  return (  
  <Router>
    <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/anime" element={<Anime />} />

        <Route path="/login" element={<Login /> } />

        <Route path="/register" element={<Register /> } />

        <Route path="/settings" element={<Settings /> } />

        <Route path="/admin_dashboard" element={<div>ADMIN DASHBOARD</div> } />

    </Routes>
  </Router>
  );

  //return <Home />
}

export default App;