// Footer.js
import React from 'react';
import './Footer.css';
import { IoLocationOutline } from 'react-icons/io5';
import { MdPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Contact Us</h3>
          <p><IoLocationOutline />ASA HOME HEALTH CARE SERVICES
            CWS ONE - MANAGED OFFICE SPACE,
            PLOT NO. 40, 41 & 42,
            SURVEY NO. 54, 3rd FLOOR,
            KONDAPUR - 500084, HYDERABAD</p>
          <li><a href='tel:+918008889648'><MdPhone />+91 8008889648</a></li>
          <li><a href='mailto:asahomehealthcare786@gmail.com'><TfiEmail /> asahomehealthcare786@gmail.com</a></li>
        </div>
        <div className="footer-links">
          <h3>Useful Links</h3>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='services'>Services</Link></li>
          <li><Link to='about'>About us</Link></li>
          <li><Link to='contact'>Contact</Link></li>
          <li><Link to='contact'>Careers (Join with us)</Link></li>
        </div>

        <div className="footer-map">
          <h3>Our Location</h3>
          <div className="map-container">
            <iframe
              title="Google Map Location"
              width="100%"
              height="200"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.86905357805205!2d78.36809346949643!3d17.464267319462213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935d12b12081%3A0xa048d216bbc711a8!2sASA%20home%20health%20care%20services!5e0!3m2!1sen!2sin!4v1734797635667!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 ASA Home Health Care. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
