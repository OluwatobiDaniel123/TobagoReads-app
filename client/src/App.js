import React from "react";
import Home from "./components/home/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/articles/Footer";
import Header from "./components/articles/Header";
import About from "./components/articles/About";
import DonationForm from "./components/articles/DonationForm";
import ProjectPage from "./components/articles/ProjectPage";
import ContactPage from "./components/articles/ContactForm";
import Dashboard, { Campaigns, Donors } from "./components/Dashboard/Dashboard";
import Chatbot from "./components/articles/Chatbot/Chatbot";
import Committee from "./components/articles/CommiteePage";
import Map from "./components/articles/Map";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Chatbot />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Projects" element={<ProjectPage />} />
        <Route path="/Donate" element={<DonationForm />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/commitee" element={<Committee />} />
        <Route path="/maps" element={<Map />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* <Route path="/donors" element={<Donors />} /> */}
      {/* <Route path="/campaigns" element={<Campaigns />} /> */}
      {/* <Route path="/reports" element={<Campaigns />} /> */}
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
