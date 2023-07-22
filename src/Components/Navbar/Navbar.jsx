import React from 'react'
import "./Navbar.css"
import { MenuIcon, ExitIcon } from "../../assets"

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = React.useState(false)
  //console.log(displayMenu)
  return (
    <>
      <nav>
        <a href="#" className="logo" id="">
          Sound<span className="red">dzign</span>
        </a>
        <ul className="menu">
          <li><a href="#info">About</a></li>
          <li><a href="#course">Course Details</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href="#testimonials">Testimonial</a></li>
        </ul>

        <div className="menu-icon" onClick={() => setDisplayMenu(!displayMenu)} >
          <img src={MenuIcon} alt="" />

        </div>
      </nav>

      <div className={`mobile-menu-container ${displayMenu ?  "show-menu":"hide-menu" }`}>

        <div className="close-icon" onClick={() => setDisplayMenu(!displayMenu)}>
          <img src={ExitIcon} alt="" />
        </div>

        <ul className="menu-items">
          <li><a href="#info" onClick={() => setDisplayMenu(!displayMenu)}>About</a></li>
          <li><a href="#course" onClick={() => setDisplayMenu(!displayMenu)}>Course Details</a></li>
          <li><a href="#blog" onClick={() => setDisplayMenu(!displayMenu)}>Blog</a></li>
          <li><a href="#testimonials" onClick={() => setDisplayMenu(!displayMenu)}>Testimonial</a></li>
        </ul>


      </div>
    </>
  )
}

export default Navbar