import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const events = [
  {
    title: "African Drum Class",
    time: "Sundays | 3 p.m – 5 p.m.",
    description:
      "Our African drum classes are held weekly at the Africa Love store in Town Square, Las Vegas.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1739256701/img15_amdguq.jpg",
  },
  {
    title: "African Drum Circle",
    time: "Monthly | 6 p.m – 8 p.m.",
    description:
      "Held on the first Saturday of each month, our drum circles typically occur within Town Square Las Vegas grounds.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1739256701/img15_amdguq.jpg",
  },
  {
    title: "Pilgrimage to the Motherland",
    time: "Annually | Every October & December",
    description:
      "Held annually, our Pilgrimages to the Motherland are extensive trips that reveal the beauty of West Africa. We visit Ghana in October and Senegal & The Gambia in December.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1739256701/img15_amdguq.jpg",
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

const EventPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      <Slide>
        <Image src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1738155731/img8_kt83iz.jpg" />
        <Overlay />
        <TextContainer>
          <GradientText>Events</GradientText>
          <p>
            “Birds sing not because they have answers but because they have
            songs.”
          </p>
        </TextContainer>
      </Slide>
      {/* Upcoming Events */}
      <div className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-xl text-green-600 font-semibold">
          Providing Culture
        </h2>
        <h3 className="text-3xl font-bold mt-2">Within Our Community</h3>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold">{event.title}</h4>
                <p className="text-gray-600 mt-1">{event.time}</p>
                <p className="mt-2 text-gray-700">{event.description}</p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded">
                  View Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Events */}
      <div className="bg-gray-200 p-2 py-10  max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold">Past Events</h3>
        <div className="mt-4 grid grid-cols-7 max-md:grid-cols-4 gap-4">
          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2009
          </Link>
          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2010
          </Link>

          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2011
          </Link>

          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2012
          </Link>

          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2013
          </Link>

          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2014
          </Link>

          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2015
          </Link>

          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2016
          </Link>

          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2017
          </Link>

          <Link
            to="/2009_event"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            2018
          </Link>

          <Link
            to="/2009_event"
            className="bg-gray-800 text-white px-4 py-2 rounded"
          >
            2019
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
