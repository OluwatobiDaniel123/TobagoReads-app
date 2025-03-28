import React from "react";
import "./Commitee.css";
import styled from "styled-components";

const CommitteePage = () => {
  const otherMembers = [
    {
      name: "Dexter Edmund",
      role: "Committee Member",
      contribution: "Educational Programs",
      contact: "dexter.e@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741418057/Screenshot_2025-03-08_081014_nvnzth.png",
    },
    {
      name: "Elizabeth James",
      role: "Program Coordinator",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741418057/Screenshot_2025-03-08_081014_nvnzth.png",
    },
    {
      name: "Ed Osbourne",
      role: "Committee Member",
      contribution: "Community Outreach",
      contact: "ed.o@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741418057/Screenshot_2025-03-08_081014_nvnzth.png",
    },
    {
      name: "Harriet George",
      role: "Events Coordinator",
      contribution: "Cultural Programs",
      contact: "harriet.g@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741716312/IMG-20250311-WA0025_hyieli.jpg",
    },
    {
      name: "Catreena Holliday",
      role: "Committee Member",
      contribution: "Literacy Programs",
      contact: "catreena.h@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741725412/IMG-20250311-WA0038_lpwcp3.jpg",
    },
    {
      name: "Deslyn Erahbor",
      role: "Resource Coordinator",
      contribution: "Educational Resources",
      contact: "deslyn.e@tobagoreads.org",

      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741418057/Screenshot_2025-03-08_081014_nvnzth.png",
    },
    {
      name: "Abigail Joseph",
      role: "Committee Member",
      contribution: "Youth Mentorship",
      contact: "abigail.j@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741716312/IMG-20250311-WA0026_v1stcn.jpg",
    },
    {
      name: "Ailene Stanislaus",
      role: "Program Developer",
      contribution: "Reading Initiatives",
      contact: "ailene.s@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741418057/Screenshot_2025-03-08_081014_nvnzth.png",
    },
    {
      name: "Milton Eastman",
      role: "Committee Member",
      contribution: "Community Relations",
      contact: "milton.e@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741418057/Screenshot_2025-03-08_081014_nvnzth.png",
    },
    {
      name: "Trevor Denoon",
      role: "Project Coordinator",
      contribution: "Educational Events",
      contact: "trevor.d@tobagoreads.org",
      Image:
        "https://res.cloudinary.com/dbcygr0pi/image/upload/v1741418057/Screenshot_2025-03-08_081014_nvnzth.png",
    },
  ];

  const Img = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;

    @media (max-width: 768px) {
      width: 70px;
      height: 70px;
    }
  `;

  return (
    <div className="committee-container">
      <div className="committee-div">
        <h1 className="committee-title">Committee</h1>
        <p style={{ color: "white" }}>
          The TobagoReads Committee is dedicated to ensuring the smooth
          operation and management of the charity home. It oversees financial
          planning, organizes community support initiatives, and ensures that
          residents receive proper care, education, and well-being. Through
          teamwork and dedication, the committee works to create a safe and
          supportive environment for those in need.
        </p>

        <div className="duke-family-section">
          <div className="particles">
            {[...Array(80)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                }}
              />
            ))}
          </div>
          <h2 className="family-title">Duke Family</h2>

          {/* Duke Family Members */}
          <div className="circle-container">
            <div className="member-circle center">
              <span>Duke</span>
              <span>Family</span>
            </div>
            <div className="member-circle pos-1">
              <span className="member-name">Helianne</span>
              <span className="member-surname">Duke</span>
            </div>

            <div className="member-circle pos-2">
              <span className="member-name">Clive</span>
              <span className="member-surname">Duke</span>
            </div>
            <div className="member-circle pos-3">
              <span className="member-name">David</span>
              <span className="member-surname">Duke</span>
            </div>
            <div className="member-circle pos-4">
              <span className="member-name">Elijah</span>
              <span className="member-surname">Duke</span>
            </div>
            <div className="member-circle pos-5">
              <span className="member-name">Anna</span>
              <span className="member-surname">Duke</span>
            </div>
            <div className="member-circle pos-6">
              <span className="member-name">Joshua</span>
              <span className="member-surname">Duke</span>
            </div>
            <div className="member-circle pos-7">
              <span className="member-name">Rachel</span>
              <span className="member-surname">Duke</span>
            </div>
            <div className="member-circle pos-8">
              <span className="member-name">Jediah</span>
              <span className="member-surname">Duke</span>
            </div>
          </div>
        </div>

        {/* Other Committee Members */}
        <div className="other-members-section">
          <h2 className="section-title">Committee Members</h2>
          <div className="members-grid">
            {otherMembers.map((member, index) => (
              <div key={index} className="member-card">
                <div className="member-card-front">
                  <Img src={member.Image} alt={member.name} />
                  <p className="member-name">{member.name}</p>
                  <p className="member-role">{member.role}</p>
                </div>
                <div className="member-card-back">
                  <h3>Contact</h3>
                  <p>{member.contact}</p>
                  <h3>Contribution</h3>
                  <p>{member.contribution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitteePage;
