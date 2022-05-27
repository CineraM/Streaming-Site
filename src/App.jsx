import "./app.scss"
import Home from "./home/Home";

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

        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<div>LOGIN</div> } />

        <Route path="/admin_dashboard" element={<div>ADMIN DASHBOARD</div> } />

    </Routes>
  </Router>
  );

  //return <Home />
}

export default App;