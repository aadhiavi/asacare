
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import logo from '../../assets/1.png'
import logo2 from '../../assets/2.png';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import { IoClose } from 'react-icons/io5';
import BookingLayer from './BookingLayer';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [bookingLayer,setBookingLayer] = useState(false)

    const handleBookingLayer = () => {
        setBookingLayer(!bookingLayer)
    }

    const handleClick = () => {
        setClick(!click)
    };
    const closeMenu = () => {
        setClick(false);
    };

    const [color, setColor] = useState(false)
    const handleColor = () => {
        if (window.scrollY >= 200) {
            setColor(true);
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", handleColor)
    return (
        <div className={color ? "navbar color" : 'navbar'}>
            <nav >
                <div className={color ? "logo-color" : "logo"}>
                    {color ? <img src={logo2} alt="" /> : <img src={logo} alt="" />}
                </div>
                <div className={click ? "menu active" : "menu"}>
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/services" onClick={closeMenu}>Our Services</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
                    <button onClick={()=>{handleBookingLayer();closeMenu()}}>Book now</button>
                </div>
                <div className="hamburger" onClick={handleClick}>
                    {
                        click ? <IoClose style={{ color: "white" }} size={35} /> : <HiOutlineBars3BottomLeft style={{ color: "white" }} size={45} />
                    }
                </div>
            </nav>
            {bookingLayer && <BookingLayer handleClose={()=>setBookingLayer(false)}/>}
        </div>
    )
}

export default Navbar
