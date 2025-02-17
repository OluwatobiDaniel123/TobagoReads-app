import Chat from "../model/chatModel.js";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;

    let botResponse = "";
    let options = [];
    let paymentLink = null;

    if (message.toLowerCase().includes("donate")) {
      botResponse =
        "Thank you for your generosity! How much would you like to donate?";
      options = ["$5", "$10", "$20", "Custom Amount"];
    } else if (["$5", "$10", "$20"].includes(message)) {
      botResponse = `Great! You selected ${message}. How would you like to pay?`;
      options = ["Credit Card", "PayPal", "Bank Transfer"];
    } else if (message.toLowerCase().includes("custom amount")) {
      botResponse = "Please enter the amount you'd like to donate.";
    } else if (!isNaN(message)) {
      botResponse = `You entered $${message}. How would you like to pay?`;
      options = ["Credit Card", "PayPal", "Bank Transfer"];
    } else if (message.toLowerCase() === "credit card") {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: { name: "Donation" },
              unit_amount: 5000, // Default to $50, should be dynamic
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: "https://yourwebsite.com/success",
        cancel_url: "https://yourwebsite.com/cancel",
      });

      botResponse =
        "Click the button below to complete your donation via Credit Card:";
      paymentLink = session.url;
    } else if (message.toLowerCase() === "paypal") {
      botResponse = "You can donate via PayPal using the button below:";
      paymentLink = "https://paypal.me/yourorganization"; // Replace with your actual PayPal link
    } else if (message.toLowerCase() === "bank transfer") {
      botResponse =
        "You can make a bank transfer to the following account details:\n\n" +
        "Bank Name: XYZ Bank\n" +
        "Account Name: Your Organization\n" +
        "Account Number: 123456789\n" +
        "SWIFT Code: XYZ123";
    } else if (message.toLowerCase() === "confirm") {
      botResponse =
        "Your donation has been successfully received! Thank you for your kindness. 😊";
    } else if (message.toLowerCase() === "cancel") {
      botResponse =
        "No worries! You can donate anytime. Let me know if you need assistance.";
    } else {
      botResponse =
        "I'm here to assist you. Would you like to make a donation?";
      options = ["Donate", "Learn More"];
    }

    const userMessage = new Chat({ sender: "user", text: message });
    await userMessage.save();

    const botMessage = new Chat({
      sender: "bot",
      text: botResponse,
      options,
      link: paymentLink,
    });
    await botMessage.save();

    res.status(200).json({ response: botResponse, options, link: paymentLink });
  } catch (error) {
    console.error("Error processing message", error);
    res.status(500).json({ error: "Error processing message" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Chat.find().sort({ timestamp: 1 });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving messages" });
  }
};
