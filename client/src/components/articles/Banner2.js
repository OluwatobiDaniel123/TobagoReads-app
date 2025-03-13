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
  z-index: 1;
`;

const Slide = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
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

const CallToAction = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 1rem 1.8rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(45deg, #ff7e5f, #feb47b);
  background-size: 300% 300%;
  text-decoration: none;
  border-radius: 25px;
  box-shadow: 0px 4px 15px rgba(255, 126, 95, 0.5);
  transition: all 0.3s ease-in-out;
  animation: ${fadeIn} 2s ease-out;

  &:hover {
    background-position: 100% 0;
    box-shadow: 0px 6px 20px rgba(255, 126, 95, 0.7);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0px 2px 10px rgba(255, 126, 95, 0.3);
  }

  @media (max-width: 768px) {
    width: 100%;

    font-size: 0.9rem;
    padding: 0.6rem 1.5rem;
  }
`;

const Banner2 = () => {
  return (
    <div style={{ height: "100vh" }} className="slider-container">
      <Slide>
        <Image src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg" />
        <Overlay />
        <TextContainer>
          <GradientText>Join Hands to Make a Difference</GradientText>
          <SubText>Every small contribution creates a big impact.</SubText>
          <CallToAction to="/donate">Donate Now</CallToAction>
        </TextContainer>
      </Slide>
    </div>
  );
};

export default Banner2;
