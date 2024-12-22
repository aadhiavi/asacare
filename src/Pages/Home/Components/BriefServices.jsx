import React, { useState } from 'react';
import '../Home.css';
import img1 from '../../../assets/asacare (11).jpg';
import img2 from '../../../assets/asacare (1).jpg';
import img3 from '../../../assets/asacare (12).jpg';
import img4 from '../../../assets/asacare (2).jpg';
import img5 from '../../../assets/asacare (4).jpg';
import img6 from '../../../assets/asacare (5).jpg';
import img7 from '../../../assets/asacare (6).jpg';
import img8 from '../../../assets/asacare (7).jpg';
import img9 from '../../../assets/asacare (10).jpg';
import img10 from '../../../assets/asacare (8).jpg';
import BookingLayer from '../../../Components/Navbar/BookingLayer';
import { Link } from 'react-router-dom';

const BriefServices = () => {
    const [bookingLayer,setBookingLayer] = useState(false)
    const handleBookingLayer = () => {
        setBookingLayer(!bookingLayer)
    }
    const services = [
        {
            img: img1,
            title: 'Critical Care Nursing at Home',
        },
        {
            img: img2,
            title: 'Doctor Consultation at Home',
        },
        {
            img: img3,
            title: 'Physiotherapy at Home',
        },
        {
            img: img4,
            title: 'Skilled Nursing Care at Home',
        }
    ]
    const packages = [
        {
            img: img5,
            title: 'Stroke / Neuro Trauma Rehabilitation',
        },
        {
            img: img6,
            title: 'Pre / Post Transplant Care',
        },
        {
            img: img7,
            title: 'Chronic Disease Management',
        },
        {
            img: img8,
            title: 'Ortho Care',
        },
        {
            img: img9,
            title: 'Cancer Care',
        },
        {
            img: img10,
            title: 'Geriatric Care',
        },
    ]
    return (
        <div className='brief-services'>
            <div className="brief-container">
                <h2>Comprehensive Clinical Home Health Care</h2>
                <p>ASA Home Health Care offers a Variety of healthcare services in the comfort of our patient’s homes including</p>
            </div>
            <div className="grid-services">
                {services.map((item, index) => (
                    <div className="service-type">
                        <img src={item.img} alt="" />
                        <div className='info-card'>
                            <h3>{item.title}</h3>
                            <a onClick={handleBookingLayer}>Book Now</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="brief-container">
                <h2>Care Packages </h2>
            </div>
            <div className="care-packages">
                {packages.map((item, index) => (
                    <div className="service-type">
                        <img src={item.img} alt="" />
                        <div className='info-card'>
                            <h3>{item.title}</h3>
                            <Link to='/services'>Learn More</Link>
                        </div>
                    </div>
                ))}
            </div>
           {bookingLayer && <BookingLayer handleClose={()=>setBookingLayer(false)}/>}
        </div>
    )
}

export default BriefServices