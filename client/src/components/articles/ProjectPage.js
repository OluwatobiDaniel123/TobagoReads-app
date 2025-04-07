import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Banner from "../articles/Banner";

const PageWrapper = styled.div`
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  // padding: 1rem;
`;

const HeroSection = styled.section`
  background: url("https://res.cloudinary.com/dbcygr0pi/image/upload/v1739256377/img14_i2hmps.jpg")
    no-repeat center center/cover;
  color: #fff;
  text-align: center;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const HeroText = styled.div`
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  button {
    background: linear-gradient(135deg, #007bff, #6610f2);
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s ease;
    &:hover {
      transform: translateY(-3px);
      background: linear-gradient(135deg, #6610f2, #007bff);
    }
  }
`;

const ProjectsGrid = styled.section`
  margin: 40px 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  padding: 20px;

  img {
    border-radius: 8px;
    object-fit: cover;
    transition: 0.3s transform;

    &:hover {
      transform: scale(1.02);
    }
  }

  h3 {
    margin: 15px 0 10px;
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 4px;
    margin: 15px 0;
    overflow: hidden;

    .progress {
      height: 100%;
      background: #ff6f61;
      width: 75%; /* Example percentage */
    }
  }

  button {
    background: linear-gradient(135deg, #007bff, #6610f2);
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
    transition: 0.3s ease;
    &:hover {
      transform: translateY(-3px);
      background: linear-gradient(135deg, #6610f2, #007bff);
    }
  }
`;

const CTASection = styled.section`
  text-align: center;
  padding: 40px 20px;
  background: #f8f9fa;
  border-radius: 8px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  button {
    background: #28a745;
    color: #fff;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;

    transition: 0.3s ease;
    &:hover {
      transform: translateY(-3px);
    }
  }
`;

const ProjectPage = () => {
  return (
    <PageWrapper>
      <Banner />
      <ProjectsGrid>
        <ProjectCard>
          <img
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1737385588/vecteezy_ai-generated-portrait-of-smiling-child-girl-with-water-in_35596918_ncwisw.jpg"
            alt="Project 1"
            loading="eager"
          />
          <h3>Shoebox of Love</h3>
          <p>Providing access to clean and safe drinking water.</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <Link to="/Donate">
            <button>Donate Now</button>
          </Link>
        </ProjectCard>
        <ProjectCard>
          <img
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1739255657/img13_mkvayy.jpg"
            alt="Project 2"
            loading="eager"
          />
          <h3>Book Bags and School Supplies</h3>
          <p>Empowering children with access to quality education.</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <Link to="/Donate">
            <button>Donate Now</button>
          </Link>
        </ProjectCard>
        <ProjectCard>
          <img
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1739255657/img13_mkvayy.jpg"
            alt="Project 2"
            loading="eager"
          />
          <h3>Book Bags and School Supplies</h3>
          <p>Empowering children with access to quality education.</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <Link to="/Donate">
            <button>Donate Now</button>
          </Link>
        </ProjectCard>{" "}
        <ProjectCard>
          <img
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1739255657/img13_mkvayy.jpg"
            alt="Project 2"
            loading="eager"
          />
          <h3>Book Bags and School Supplies</h3>
          <p>Empowering children with access to quality education.</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <Link to="/Donate">
            <button>Donate Now</button>
          </Link>
        </ProjectCard>{" "}
        <ProjectCard>
          <img
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1739255657/img13_mkvayy.jpg"
            alt="Project 2"
            loading="eager"
          />
          <h3>Book Bags and School Supplies</h3>
          <p>Empowering children with access to quality education.</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <Link to="/Donate">
            <button>Donate Now</button>
          </Link>
        </ProjectCard>{" "}
        <ProjectCard>
          <img
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1739255657/img13_mkvayy.jpg"
            alt="Project 2"
            loading="eager"
          />
          <h3>Book Bags and School Supplies</h3>
          <p>Empowering children with access to quality education.</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <Link to="/Donate">
            <button>Donate Now</button>
          </Link>
        </ProjectCard>
        <ProjectCard>
          <img
            src="https://res.cloudinary.com/dbcygr0pi/image/upload/v1737386860/vecteezy_ai-generated-stethoscope-and-apple-on-wooden-table-health_36467585_xw9kmx.jpg"
            alt="Project 3"
            loading="eager"
          />
          <h3>Feminine Hygiene Packs</h3>
          <p>Bringing medical aid to underserved regions.</p>
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <Link to="/Donate">
            <button>Donate Now</button>
          </Link>
        </ProjectCard>
      </ProjectsGrid>

      <CTASection>
        <h2>Ready to Make a Difference?</h2>
        <Link to="/Donate">
          <button>Donate Today</button>
        </Link>
      </CTASection>
    </PageWrapper>
  );
};

export default ProjectPage;
