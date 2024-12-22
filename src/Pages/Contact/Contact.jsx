import React, { useState } from "react";
import axios from 'axios';
import './Contact.css';
import Footer from "../../Components/Footer/Footer";

const Contact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [overlay, setOverlay] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus('');

    const contactData = { name, number, email, message };
    let isValid = true;

    // Validation checks
    if (!name) {
      setStatus('Please enter your name');
      isValid = false;
    }

    if (!number) {
      setStatus('Please enter your phone number');
      isValid = false;
    }

    if (number && (!/^\d+$/.test(number) || number.length !== 10)) {
      setStatus('Please enter a valid number');
      isValid = false;
    }

    if (!email) {
      setStatus('Please enter your email address');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setStatus('Please enter a valid email address');
      isValid = false;
    }

    if (!isValid) {
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.post('https://asaback-ld6t.onrender.com/api/forms/submit', contactData);
      if (response.status === 200) {
        console.log(contactData);
        setStatus('Form submitted successfully!');
        setName('');
        setNumber('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      setStatus('Something went wrong, please try again.');
    } finally {
      setLoading(false);
      setOverlay(true)
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setNumber(value);
    }
  };

  return (
    <div>
      {overlay && (
        <div className="toggle-text">
          <div className="overlay-message">
            <p>{status}</p>
            <button onClick={() => setOverlay(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="contactus-container">
        <h2>CONTACT US</h2>
        <div className="contact-us">
          <section className="info-section">
            <h3>OUR OFFICE ADDRESS</h3>
            <div className="address-container">
              <p>ASA HOME HEALTH CARE SERVICES <br />CWS ONE - MANAGED OFFICE SPACE,<br /> PLOT NO. 40, 41 & 42, <br />SURVEY NO. 54, 3rd FLOOR, <br />KONDAPUR - 500084, HYDERABAD</p>
              <p><strong>Phone:</strong> <a href="tel:+918008889648">+91 8008889648</a></p>
              <p><strong>Email:</strong> <a href="mailto:asahomehealthcare786@gmail.com">asahomehealthcare786@gmail.com</a></p>
              <p><strong>Office Hours:</strong> MON - SAT, 9:00 AM - 6:00 PM</p>
              <h4>
              LANDMARK:- Near Kondapur Signal, Kims Hospital, Vijay Sales 
            </h4>
            </div>
            
          </section>
          <section className="form-section">
            <h3>GET IN TOUCH</h3>
            <form className='contact form' onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Phone Number*"
                value={number}
                onChange={handlePhoneChange}
                required
              />
              <input
                type="email"
                placeholder="Email address*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <textarea
                type="text"
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
              </button>
            </form>
          </section>
        </div>
        <div className="map-section">
          <h2>Map Location</h2>
          <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.86905357805205!2d78.36809346949643!3d17.464267319462213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb935d12b12081%3A0xa048d216bbc711a8!2sASA%20home%20health%20care%20services!5e0!3m2!1sen!2sin!4v1734797635667!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;

