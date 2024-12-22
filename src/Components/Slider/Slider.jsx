import React, { useEffect, useState } from 'react';
import './Slider.css';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';

const Slider = () => {
    const reviews = [
        {
            id: 1,
            content: "I have taken nurse services for my mom from ASA. We are very happy with the service. They are very prompt in their response. The nurse takes very good care of my mum. I would highly recommend ASA for any of the nursing facility. Thank you.",
            client: 'Arshia Khan',
        },
        {
            id: 2,
            content: "I have been using their services since 2022. First I used them for my mother in law and now I am availing their services for my dad. They are very prompt in responding and also in providing quick replacements. Although a couple of caretakers were not up to the mark, the present caretaker, Prasanna Kumar is very good. I wish he stays with my dad as long as we need caretaking services. Thank you team for doing a good job.",
            client: 'Anu Prasad',
        },
        {
            id: 3,
            content: "Using their services for the past one year. Good service. Reliable and prompt.",
            client: 'Padma Chitrapu',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    useEffect(() => {
        const interval = setInterval(() => nextSlide(), 5000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="review-container">
            <h1>What Our Clients Say!</h1>
            <div className="slider-container">
                <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {reviews.map((review) => (
                        <div className="slide" key={review.id}>
                            <p>{review.content}</p>
                            <h4>- {review.client}</h4>
                        </div>
                    ))}
                </div>

            </div>
            <div className="slide-btn prev" onClick={prevSlide}><HiOutlineChevronLeft /></div>
            <div className="slide-btn next" onClick={nextSlide}><HiOutlineChevronRight /></div>
            <div className="dots">
                {reviews.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;





