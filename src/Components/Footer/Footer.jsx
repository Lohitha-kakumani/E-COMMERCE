import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
import pintrest_icon from '../Assets/Frontend_Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png'
import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
 const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Product</li>
            <li>Offices</li>
            <li>About</li>
            <li>Conatct</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pintrest_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 all rights reserved</p>
        </div>
    </div>
  )
}
export default Footer