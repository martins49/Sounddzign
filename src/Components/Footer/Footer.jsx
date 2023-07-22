//import React from 'react'
import "./Footer.css"
import { SocialIcons } from "../../assets"

const Footer = () => {
  let year = new Date()

  return (
    <footer id="footer" className="black">
      <div className="wrapper">
        <div className="links-container">
          <div className="links">
            <a href="#" className="logo" id="">
              Sound<span className="red">dzign</span>
            </a>

            <div className="social-icons">
              <a href=""><img src={SocialIcons} alt="" /></a>
            </div>
            <div className="copyright">
              This website is designed by Marto busayo Ⓒ {year.getFullYear()}
            </div>

          </div>
          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li> <a href="#">Blog </a> </li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li> <a href="#">contact@email.com </a> </li>
              <li><a href="#">+1 999 9999 999</a></li>
            </ul>
          </div>
          <div className="copyright2">
            This website is designed by Marto busayo Ⓒ {year.getFullYear()}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer