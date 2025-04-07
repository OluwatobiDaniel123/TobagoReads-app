import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";

const settings = {
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: false,
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  // object-fit: cover;
  object-fit: fill;
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 768px) {
    object-fit: cover;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  // z-index: 1;
`;

const Slide = styled.div`
  width: 100%;
  height: 150vh;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // z-index: 1;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    width: 90%;
    padding: 1.5rem;
  }
`;

const GradientText = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  text-transform: uppercase;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  background-size: 400% 400%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${gradientShift} 6s ease infinite, ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  font-size: 1.2rem;
  margin: 1rem 0;
  line-height: 1.6;
  color: #fff;
  animation: ${fadeIn} 1.5s ease-out;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const events = [
  {
    title: "New Year's Eve Pilgrimage to the Motherland",
    date: "December 29, 2018 - January 10, 2019",
    description:
      "Experience West Africa (Senegal & The Gambia) by touring the Motherland...",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
  },
  {
    title: "African Drum Class",
    date: "Friday | December 28",
    description:
      "Join Africa Love Store at Town Square Las Vegas every Friday night for our weekly African Drum class...",
    image: "https://via.placeholder.com/300",
  },
  {
    title: "Kwanzaa Celebration - UMOJA",
    date: "Wednesday | December 26",
    description:
      "A Live Remote with KCEP POWER 88.1 FM and special appearances...",
    image: "https://via.placeholder.com/300",
  },
];

const Events_09 = () => {
  return (
    <div className="slider-container">
      <Slide>
        <Image src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg" />
        <Overlay />
        <TextContainer>
          <GradientText>2009 Event</GradientText>
          <SubText>Every small contribution creates a big impact.</SubText>
        </TextContainer>
      </Slide>

      <div className="flex flex-col items-center p-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded mb-4">
          Return to Current Events
        </button>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-700 text-sm mb-4">
                  {event.description}
                </p>
                <button className="text-blue-500 hover:underline">
                  More Info
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events_09;
