import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import './About.css';
import img1 from '../../assets/edge1.png'
import img2 from '../../assets/edge2.png'
import img3 from '../../assets/edge3.png'
import img4 from '../../assets/edge4.png'
import img5 from '../../assets/edge5.png'
import img6 from '../../assets/edge7.png'
import img7 from '../../assets/edge6.png'
import img8 from '../../assets/edge8.png'
import img9 from '../../assets/edge9.png'
import ContactCard from '../../Components/ContactCard/ContactCard';
import Footer from '../../Components/Footer/Footer';

const About = () => {
    const data = [
        { img: img1, title: 'Seamless Care Transition' },
        { img: img2, title: 'Evidence based practice' },
        { img: img3, title: 'Dedicated quality department ' },
        { img: img4, title: '24/7 ON-Call Services' },
        { img: img5, title: 'Better Clinical Outcomes' },
        { img: img6, title: 'Integrated care delivery' },
        { img: img7, title: 'Works along with the primary physician' },
        { img: img8, title: 'Background verified staff' },
        { img: img9, title: 'Promise of quality' },
    ]
    return (
        <div className="about-container">
            <div className='about-intro'>
                <h1>ASA Edge</h1>
                <p>At ASA, we deliver exceptional home nursing care services designed to promote comfort and speedy recovery in the familiarity of your home. Our skilled team of qualified nurses offers personalized care, including post-surgical support, chronic care, and much more, ensuring the best possible health outcomes.</p>
            </div>
            <h1 className='headline'>Key Features of Our Comprehensive Healthcare Services</h1>
            <div className="about-grid">
                {data.map((item, i) => (<div key={i} className="about-child">
                    <img src={item.img} style={{ height: '100px', objectFit: 'contain' }} alt="" />
                    <h2>{item.title}</h2>
                </div>))}
            </div>
            <ContactCard />
            <Footer />
        </div>
    )
}

export default About