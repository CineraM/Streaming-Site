
import "./app.scss"
import Home from "./home/Home";
import Anime from "./anime/Anime";
import Login from "./login/Login";
import Register from "./register/Register";
import Settings from "./settings/Settings";
import Admin from "./admindash/Admindash";
import NotFound from "./notfound/Notfound";

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

        <Route path="/admin_dashboard" element={<Admin /> } />

        <Route path="/notfound" element={<NotFound /> } />

        <Route path="/*" element={<NotFound /> } /> 


    </Routes>
  </Router>
  );

  //return <Home />
}

export default App;