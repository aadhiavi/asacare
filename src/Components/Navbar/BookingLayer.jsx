import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdPhone } from 'react-icons/md';
import { SiGoogleforms } from 'react-icons/si';

const BookingLayer = ({ handleClose }) => {
    return (
        <div className="toggle-text">
            <div className="overlay-message">
                <div onClick={handleClose} className='booking-layer-options' >
                    <p><a href="tel:+919090909090"><MdPhone/></a> Call</p>
                    <p><Link to='/contact'><SiGoogleforms /></Link>Form</p>
                </div>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    )
}

export default BookingLayer