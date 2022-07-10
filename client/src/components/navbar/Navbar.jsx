import { ArrowDropDown } from '@material-ui/icons' //Notifications
import { useState } from 'react'
import "./navbar.scss"
import { useNavigate } from "react-router-dom";

// Scroll function to change the opacity of the navbar
const Navbar = () => {

  function logout() 
  {
    localStorage.removeItem('token')
    localStorage.removeItem('admin_token')
    localStorage.removeItem('user_name')
    navigate('/login')
	}  

  function settings() 
  {
    navigate('/settings')
	}  
  // navigate
  let navigate = useNavigate();


  const query_name = localStorage.getItem('user_name')
  const name = query_name.charAt(0).toUpperCase() + query_name.slice(1);
  
  
  // usestate from react, use a bool variable in the css file
  const[isScrolled, setIsScrolled] = useState(false);

  // if the page offset is larger than 0, unblur the navbar
  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return() => (window.onscroll = null);
  };

  window.scrollTo(0, 0)

  // Use the bool variable to determine what to pass into the xml
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
          
          <div className="left">
            <img 
              src="https://i.imgur.com/C9YJkX6.png" 
              alt=""
              onClick={() => navigate("/login")} 
            />
            <span
            onClick={() => navigate("/home")}>
              Homepage 
            </span>

          </div>

          <div className="right">
            {/* <Search className='icon'/> */}
            <span>Welcome back {name}</span>

            {/* <img src="https://blog.jodilogik.com/wp-content/uploads/2016/05/people-1.png" alt="" /> */}

            {/* <Notifications className='icon'/> */}
            <div className="profile">
              <ArrowDropDown className='icon'/>
              <div className="options">

                <span className='settings-btn' onClick={settings}>Setting</span>

                <span className='logout-btn' onClick={logout}>Logout</span>
                {/* onClick={lougout} */}
              </div>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Navbar