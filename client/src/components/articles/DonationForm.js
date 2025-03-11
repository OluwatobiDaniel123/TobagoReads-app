import React, { useState } from "react";
import styled from "styled-components";
import PaystackPop from "@paystack/inline-js";
import QRCode from "react-qr-code";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e3c72, #2a5298);
  padding: 15px;
`;

const Card = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #1e3c72;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  color: #555;
  text-align: center;
  margin-bottom: 30px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
`;

const PaymentButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background: #1e3c72;
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  &:hover {
    background: #2a5298;
  }
`;

const QRCodeSection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background: #fff;
  color: black;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

const OtherPayments = styled.div`
  margin-top: 30px;
  text-align: center;

  h3 {
    margin-bottom: 10px;
    color: #1e3c72;
  }

  p {
    margin: 5px 0;
    font-weight: bold;
  }
`;

const DonationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    amount: "50",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_39c77ec63722966d5894708cc17252166da01be9",
      amount: formData.amount * 100,
      name: formData.fullName,
      email: formData.email,
      onSuccess: (transaction) => {
        console.log(transaction);
        setIsSubmitted(true);
        setFormData({ fullName: "", email: "", amount: "" });
      },
      onCancel: () => {
        console.log("Transaction cancelled");
      },
    });
  };

  return (
    <Container>
      <Card>
        <Title>Donate Now!!</Title>
        <Subtitle>
          Your generosity makes a difference in someone's life.
        </Subtitle>
        <form onSubmit={handlePaystack}>
          <Input
            type="text"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Select name="amount" value={formData.amount} onChange={handleChange}>
            <option value="10">$10</option>
            <option value="25">$25</option>
            <option value="50">$50</option>
            <option value="100">$100</option>
            <option value="250">$250</option>
            <option value="500">$500</option>
          </Select>
          <PaymentButton type="submit">Pay with Paystack</PaymentButton>
        </form>
        {isSubmitted && <p>Thank you for your generous donation!</p>}
      </Card>
      <QRCodeSection>
        <OtherPayments>
          <h3>Other Payment Methods</h3>
          <p>🏦 Zelle: alphacitem@msm.com</p>
        </OtherPayments>
        <h3>Donate via CashApp</h3>
        <QRCode value="https://cash.app/$HelianneDuke" size={150} />
        <p>
          Scan this QR code or use 💵 CashApp: <strong>$HelianneDuke</strong>
        </p>
      </QRCodeSection>
      ;
    </Container>
  );
};

export default DonationForm;
