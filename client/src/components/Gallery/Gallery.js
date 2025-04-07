import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const galleryData = [
  {
    year: 2009,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2010,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2011,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2012,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2013,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2014,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2015,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2016,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2017,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2018,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2019,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
  {
    year: 2025,
    images: [
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg",
    ],
    buttonColor: "green",
    link: "/gallery-2009",
  },
];

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
`;

const Slide = styled.div`
  width: 100%;
  height: 120vh;
  position: relative;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

  p {
    color: white;
  }

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

const Gallery = () => {
  return (
    <div className="w-full">
      <Slide>
        <Image src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg" />
        <Overlay />
        <TextContainer>
          <GradientText>Gallery</GradientText>
          <p>
            “Birds sing not because they have answers but because they have
            songs.”
          </p>
        </TextContainer>
      </Slide>
      <div className="container mx-auto py-8 px-3">
        <h2 className="text-center text-3xl font-semibold mb-6">
          Tobagoreads Gallery
        </h2>
        {galleryData.map((gallery, index) => (
          <div key={index} className="mb-10">
            <div className="flex justify-between">
              <h3 className="text-xl font-medium mb-3">
                Nigeria - {gallery.year}
              </h3>
              <Link
                to={gallery.link}
                className={`mb-3 px-4 py-2 text-white bg-${gallery.buttonColor}-600 rounded hover:bg-${gallery.buttonColor}-700`}
              >
                View Entire Gallery 📷
              </Link>
            </div>

            <div className="flex space-x-2 overflow-auto pb-4">
              {gallery.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${gallery.year}`}
                  className="w-36 h-24 object-cover rounded"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
