import React, { useState } from 'react';
import logo from '../../assets/asa1.png';
import { IoLocationOutline } from 'react-icons/io5';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPhone } from 'react-icons/md';
import { TfiEmail } from 'react-icons/tfi';
import axios from 'axios';
import './ContactCard.css';

const ContactCard = () => {
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
    }

    if (!isValid) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/forms/submit', contactData);
      if (response.status === 200) {
        console.log(contactData)
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
    <div className='contact-card'>
      {overlay && (
        <div className="toggle-text">
          <div className="overlay-message">
            <p>{status}</p>
            <button onClick={() => setOverlay(false)}>Close</button>
          </div>
        </div>
      )}

      <div className="contact-container">
        <div className="contact-box">
          <h3>Fill the form to Book ASA’s Medical Services at Home</h3>
          <p>Please enter your details and we will reach out to you as soon as we can.</p>
          <img src={logo} alt="Logo" />
        </div>
        <div className="contact-box">
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
          <div className='contact-icons'>
            <a href="mailto:asahomehealthcare786@gmail.com" className="contact-link"><TfiEmail /></a>
            <a href="tel:+918008889648" className="contact-link"><MdPhone/></a>
            <a href="https://wa.me/+918008889648" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link"><FaWhatsapp /></a>
            <a href="https://maps.app.goo.gl/KyuRcAmfnXYfNL238" className="contact-link"><IoLocationOutline /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;