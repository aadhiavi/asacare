import React from 'react';
import './Services.css';
import ContactCard from '../../Components/ContactCard/ContactCard';
import Footer from '../../Components/Footer/Footer';

const services = [
    {
        title: 'Home Nursing Care',
        icon: '🏠',
        description: (
            <>
                <p>With the availability of nursing services at home, you no longer need to stress yourself about visiting a clinic or hospital and aggravating the injury. If you need nursing services near you, ASA is the solution for you. Call us at +9999999 to make an appointment with qualified and experienced in-home nurses.</p>
                <p>We offer 12/24 hr home care nursing services by experienced male/female nurses. Trust us to provide exceptional home nursing services tailored to your needs, ensuring comfort and well-being for your loved ones at home.</p>
            </>
        )
    },
    {
        title: 'How Much Does Nursing Care at Home Cost?',
        icon: '💰',
        description: (
            <>
                <p>The cost of home care nursing services varies depending on the criticality of the illness and the duration of the service sought. Home care nursing services have been found to be anywhere between 20% and 50% cheaper compared to hospitalization.</p>
                <p>You can hire a female nurse for home care near you at very affordable costs. Call our hotline number +99999999999 for more details and booking.</p>
            </>
        )
    },
    {
        title: 'Nursing Care Services at Home',
        icon: '🩺',
        description: (
            <>
                <p>Home care nursing services start after a doctor’s recommendation. Our nurses provide ongoing medical support and rehabilitative care, including monitoring the patient’s health, administering treatments, and more.</p>
                <ul>
                    <li>Check diet, blood pressure, heart rate, and temperature</li>
                    <li>Ensure adherence to prescribed treatments</li>
                    <li>Coordinate with doctors for the best care course</li>
                    <li>Help with self-care and safety measures</li>
                </ul>
            </>
        )
    },
    {
        title: 'Benefits of Home Nursing Care',
        icon: '🌟',
        description: (
            <>
                <p>Home nursing care offers numerous benefits, including:</p>
                <ul>
                    <li>Skilled care in the comfort of your home</li>
                    <li>Faster recovery surrounded by family</li>
                    <li>Helps manage chronic conditions and avoid hospitalization</li>
                    <li>Better health outcomes with personalized care</li>
                    <li>Medication management and daily support</li>
                </ul>
            </>
        )
    },
    {
        title: 'What We Help With',
        icon: '🛠️',
        description: (
            <>
                <p>We provide comprehensive care services, including:</p>
                <ul>
                    <li>Post-surgical care</li>
                    <li>Elder care</li>
                    <li>Chronic care</li>
                    <li>Tracheotomy care</li>
                    <li>Urinary catheterization care</li>
                    <li>Wound care</li>
                    <li>Injections and IV infusion</li>
                    <li>Diabetic care</li>
                </ul>
                <p>All services are supervised by senior doctors for the best quality care.</p>
            </>
        )
    }
];

const ServiceCard = ({ title, icon, description }) => (
    <div className="service-card">
        <div className="service-card-header">
            <span className="service-icon">{icon}</span>
            <h3>{title}</h3>
        </div>
        <div className="service-description">{description}</div>
    </div>
);

const Services = () => {
    return (
        <div className="services-page">
            <div className='services-landing-card'>
                <h1>Our Home Nursing Care Services</h1>
                <p>We provide top-tier home nursing care services to ensure your comfort and speedy recovery, all at the convenience of your home.</p>
            </div>
            <div className="services-container">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        title={service.title}
                        icon={service.icon}
                        description={service.description}
                    />
                ))}
            </div>
            <ContactCard/>
            <Footer/>
        </div>
    );
};

export default Services;



