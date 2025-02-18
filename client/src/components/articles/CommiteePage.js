import React from "react";
import "./Commitee.css";

const CommitteePage = () => {
  const otherMembers = [
    {
      name: "Dexter Edmund",
      role: "Committee Member",
      contribution: "Educational Programs",
      contact: "dexter.e@tobagoreads.org",
    },
    {
      name: "Elizabeth James",
      role: "Program Coordinator",
      contribution: "Youth Development",
      contact: "elizabeth.j@tobagoreads.org",
    },
    {
      name: "Ed Osbourne",
      role: "Committee Member",
      contribution: "Community Outreach",
      contact: "ed.o@tobagoreads.org",
    },
    {
      name: "Harriet George",
      role: "Events Coordinator",
      contribution: "Cultural Programs",
      contact: "harriet.g@tobagoreads.org",
    },
    {
      name: "Catreena Holliday",
      role: "Committee Member",
      contribution: "Literacy Programs",
      contact: "catreena.h@tobagoreads.org",
    },
    {
      name: "Deslyn Erahbor",
      role: "Resource Coordinator",
      contribution: "Educational Resources",
      contact: "deslyn.e@tobagoreads.org",
    },
    {
      name: "Abigail Joseph",
      role: "Committee Member",
      contribution: "Youth Mentorship",
      contact: "abigail.j@tobagoreads.org",
    },
    {
      name: "Ailene Stanislaus",
      role: "Program Developer",
      contribution: "Reading Initiatives",
      contact: "ailene.s@tobagoreads.org",
    },
    {
      name: "Milton Eastman",
      role: "Committee Member",
      contribution: "Community Relations",
      contact: "milton.e@tobagoreads.org",
    },
    {
      name: "Trevor Denoon",
      role: "Project Coordinator",
      contribution: "Educational Events",
      contact: "trevor.d@tobagoreads.org",
    },
  ];

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
                  <div className="member-name">{member.name}</div>
                  <div className="member-role">{member.role}</div>
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
