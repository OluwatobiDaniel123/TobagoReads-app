import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CommitteePage = () => {
  return (
    <CommitteeSection>
      <Container>
        <Header>
          <Title>Meet Our Leadership Committee</Title>
          <Subtitle>
            Our leadership committee is dedicated to creating a lasting impact
            through strategic planning and community involvement. Each member
            brings unique expertise, ensuring the success of our initiatives.
          </Subtitle>
        </Header>

        <CommitteeList>
          {committeeMembers.map((member, index) => (
            <Member key={index}>
              <Image src={member.image} alt={member.name} />
              <Details>
                <Name>{member.name}</Name>
                <Position>{member.position}</Position>
                <Bio>{member.bio}</Bio>
                <SocialLinks>
                  {member.socials.map((social, i) => (
                    <SocialLink
                      key={i}
                      href={social.link}
                      target="_blank"
                      aria-label={social.platform}
                    >
                      <SocialIcon src={social.icon} alt={social.platform} />
                    </SocialLink>
                  ))}
                </SocialLinks>
              </Details>
            </Member>
          ))}
        </CommitteeList>
      </Container>
    </CommitteeSection>
  );
};

export default CommitteePage;

const committeeMembers = [
  {
    name: "John Doe",
    position: "Chairman",
    bio: "Overseeing strategic direction and partnerships to maximize our charity's impact.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Twitter",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
  {
    name: "Jane Smith",
    position: "Vice Chairperson",
    bio: "Driving innovative fundraising and outreach programs to expand our reach.",
    image:
      "https://res.cloudinary.com/dbcygr0pi/image/upload/v1736774363/WhatsApp_Image_2025-01-10_at_17.55-Photoroom_tafyqg.jpg",
    socials: [
      {
        platform: "LinkedIn",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
      {
        platform: "Facebook",
        link: "#",
        icon: "https://via.placeholder.com/24",
      },
    ],
  },
];

const CommitteeSection = styled.section`
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  // color: #ffffff;
  // background: #f9f9f9;
  padding: 60px 20px;
  // color: #333;
  text-align: center;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Header = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  // color: #2c3e50;
  color: #ffffff;

  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #fff;
  font-weight: 100;

  font-style: italic;
`;

const CommitteeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
  align-items: center;
`;

const Member = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  width: 100%;
  max-width: 900px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Name = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #2c3e50;
  font-weight: 700;
`;

const Position = styled.p`
  font-weight: bold;
  font-size: 1rem;
  color: #1a5276;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Bio = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.3;
  margin-bottom: 10px;
`;

const Image = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.06);
  }
`;

const Details = styled.div`
  flex: 1;
  text-align: left;
`;

const SocialLinks = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
`;
