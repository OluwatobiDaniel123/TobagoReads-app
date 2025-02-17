import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  background: #007bff;
  border-radius: 12px;
  overflow: hidden;
  padding: 5px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 15px;
  background: ${(props) => (props.active ? "#0056b3" : "#007bff")};
  color: white;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  border-radius: 8px;
  &:hover {
    background: #0056b3;
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  margin-top: 25px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  line-height: 1.6;
  color: #333;
`;

const fundraisingSections = {
  "10 for 10 Pledge":
    "Support the 10 for 10 initiative by pledging to contribute.",
  "Scholarship Pledge":
    "Help students achieve their dreams with scholarship pledges.",
  Recycling:
    "Join the recycling program to promote environmental sustainability.",
  Tablets: "Donate tablets to support digital education initiatives.",
};

const Fundraising = () => {
  const [activeTab, setActiveTab] = useState("10 for 10 Pledge");

  return (
    <TabContainer>
      <Tabs>
        {Object.keys(fundraisingSections).map((section) => (
          <Tab
            key={section}
            active={activeTab === section}
            onClick={() => setActiveTab(section)}
          >
            {section}
          </Tab>
        ))}
      </Tabs>
      <Content>
        <p>{fundraisingSections[activeTab]}</p>
      </Content>
    </TabContainer>
  );
};

export default Fundraising;
