// import React, { useEffect, useState } from "react";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
// import "./Map.css";

// const Map = () => {
//   const [selectedNetwork, setSelectedNetwork] = useState(null);

//   const mapStyles = {
//     height: "70vh",
//     width: "100%",
//   };

//   const defaultCenter = {
//     lat: 9.082, // Nigeria's approximate center
//     lng: 8.6753,
//   };

//   const networks = [
//     { id: "5g", name: "5G Network", color: "#FFD700" },
//     { id: "4g", name: "4G Network", color: "#32CD32" },
//     { id: "3g", name: "3G Network", color: "#1E90FF" },
//     { id: "2g", name: "2G Network", color: "#FF6347" },
//     { id: "fiber", name: "Fiber - The Home Network", color: "#8A2BE2" },
//   ];

//   const toggleNetwork = (networkId) => {
//     setSelectedNetwork(networkId === selectedNetwork ? null : networkId);
//   };

//   return (
//     <div className="map-container">
//       <div className="network-controls">
//         <div className="controls-header">
//           <h3>Coverages</h3>
//           <div className="controls-icons">
//             <button className="stores-btn">
//               <i className="fas fa-store"></i> Stores
//             </button>
//             <button className="agents-btn">
//               <i className="fas fa-users"></i> MoMo Agents
//             </button>
//           </div>
//         </div>

//         <div className="network-buttons">
//           {networks.map((network) => (
//             <button
//               key={network.id}
//               className={`network-btn ${
//                 selectedNetwork === network.id ? "active" : ""
//               }`}
//               onClick={() => toggleNetwork(network.id)}
//             >
//               <span
//                 className="network-indicator"
//                 style={{ backgroundColor: network.color }}
//               ></span>
//               {network.name}
//               <span className="toggle-icon">+</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={6}
//           center={defaultCenter}
//           options={{
//             styles: [
//               {
//                 featureType: "all",
//                 elementType: "geometry",
//                 stylers: [{ visibility: "on" }],
//               },
//             ],
//             mapTypeControl: false,
//             streetViewControl: false,
//             fullscreenControl: true,
//             zoomControl: true,
//           }}
//         ></GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default Map;
// // src =
// //   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05067748396!2d-74.3091773393739!3d40.69719333811824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng";
// // allowfullscreen;
// // loading = "eager";
// // referrerpolicy = "no-referrer-when-downgrade";
// import React, { useState } from "react";
// import "./Map.css";

// const Map = () => {
//   const [selectedLocation, setSelectedLocation] = useState("lagos");

//   // Locations with corresponding Google Maps embed URLs
//   const locations = [
//     {
//       id: "lagos",
//       name: "Lagos",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317137.5804109471!2d3.197937029489078!3d6.5243791580789005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b65a3c9d2e1%3A0xc472d4b5e8e36b28!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "abuja",
//       name: "Abuja",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315158.5555043141!2d6.956649646148025!3d9.057851941550679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104dd7f52f6c6b4f%3A0xc6a793a2c157!2sAbuja%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "portharcourt",
//       name: "Port Harcourt",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.5436051870155!2d6.991789615204843!3d4.815554342524835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cf1f8b8964cf%3A0xf0782739bbfa8b08!2sPort%20Harcourt%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "kano",
//       name: "Kano",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315374.62732730984!2d8.489825670208145!3d12.00217975686267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11b7bdcd2fd62127%3A0x1dcb4c9f6e738d13!2sKano%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "ibadan",
//       name: "Ibadan",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315266.28115897546!2d3.7837258488074096!3d7.376117675530478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103989b7a48b5f6b%3A0xe8a682c7073428a2!2sIbadan%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "enugu",
//       name: "Enugu",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d315052.54892101194!2d7.430634981836076!3d6.5243791580789005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104383c99eac4357%3A0x1fdf1e08f44aaf4!2sEnugu%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//   ];

//   return (
//     <div className="map-container">
//       <div className="network-controls">
//         <div className="controls-header">
//           <h3>Select Location</h3>
//         </div>

//         {/* Location buttons */}
//         <div className="network-buttons">
//           {locations.map((location) => (
//             <button
//               key={location.id}
//               className={`network-btn ${
//                 selectedLocation === location.id ? "active" : ""
//               }`}
//               onClick={() => setSelectedLocation(location.id)}
//             >
//               {location.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Google Maps Iframe */}
//       <div className="map-frame">
//         <iframe
//           src={
//             locations.find((loc) => loc.id === selectedLocation)?.url ||
//             locations[0].url
//           }
//           width="100%"
//           height="500"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="eager"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Map;
// import React, { useState } from "react";
// import "./Map.css";

// const Map = () => {
//   const [selectedLocation, setSelectedLocation] = useState("tobago");

//   // Locations with corresponding Google Maps embed URLs
//   const locations = [
//     {
//       id: "tobago",
//       name: "Tobago Reads Map",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8056204.547269618!2d-61.261684625067005!3d10.69180328704151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c360856cc972c85%3A0xe7229e2993f2927e!2sTobago!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "trinidad",
//       name: "Trinidad & Tobago",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8056204.547269618!2d-61.261684625067005!3d10.69180328704151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c360856cc972c85%3A0xe7229e2993f2927e!2sTrinidad%20and%20Tobago!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "jamaica",
//       name: "Jamaica",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389547.5569867384!2d-77.32897952563969!3d18.109581357187164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda2f3d672b8e7d%3A0xe5d8384b439c2b99!2sJamaica!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "nigeria",
//       name: "Nigeria",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15904208.406374084!2d2.676932103049628!3d9.082039024358467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c7b8c5c3e1b1f%3A0x4732a02f39a1a00c!2sNigeria!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "newyork",
//       name: "New York",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.05067748396!2d-74.3091773393739!3d40.69719333811824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "india",
//       name: "India",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15684575.332635738!2d73.81096329784687!3d20.593684098374655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ffd00f413cf%3A0xb2d9e073ae9f3e1a!2sIndia!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "cameroon",
//       name: "Cameroon",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16169012.318354504!2d8.83112290368056!3d3.8480000314183734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d019a8dd8a1%3A0x4c5f1c5930c53c5d!2sCameroon!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "cuba",
//       name: "Cuba",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928420.9892193752!2d-80.83287490925517!3d21.521757023486636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd55b40a43f5f5%3A0x5a98c282a9ef0c7e!2sCuba!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//     {
//       id: "liberia",
//       name: "Liberia",
//       url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943887.325234924!2d-11.365505901244888!3d6.428055109499106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc0a2e6b021b6d5%3A0x9b1a7c0dc1a4b5d5!2sLiberia!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
//     },
//   ];

//   return (
//     <div className="map-container">
//       <div className="network-controls">
//         <h3>Select Location</h3>
//         <div className="network-buttons">
//           {locations.map((location) => (
//             <button
//               key={location.id}
//               className={`network-btn ${
//                 selectedLocation === location.id ? "active" : ""
//               }`}
//               onClick={() => setSelectedLocation(location.id)}
//             >
//               {location.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="map-frame">
//         <iframe
//           src={locations.find((loc) => loc.id === selectedLocation)?.url}
//           width="100%"
//           height="500"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="eager"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Map;
import React, { useState } from "react";
import "./Map.css";

const locations = [
  {
    id: "tobago",
    name: "Tobago Reads Map",
    url: "https://www.google.com/maps/embed?...Tobago",
  },
  {
    id: "trinidad",
    name: "Trinidad & Tobago",
    url: "https://www.google.com/maps/embed?...Trinidad",
  },
  {
    id: "jamaica",
    name: "Jamaica",
    url: "https://www.google.com/maps/embed?...Jamaica",
  },
  {
    id: "nigeria",
    name: "Nigeria",
    url: "https://www.google.com/maps/embed?...Nigeria",
  },
  {
    id: "newyork",
    name: "New York",
    url: "https://www.google.com/maps/embed?...NewYork",
  },
  {
    id: "india",
    name: "India",
    url: "https://www.google.com/maps/embed?...India",
  },
  {
    id: "cameroon",
    name: "Cameroon",
    url: "https://www.google.com/maps/embed?...Cameroon",
  },
  {
    id: "cuba",
    name: "Cuba",
    url: "https://www.google.com/maps/embed?...Cuba",
  },
  {
    id: "liberia",
    name: "Liberia",
    url: "https://www.google.com/maps/embed?...Liberia",
  },
];

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <div className="map-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Locations 📍</h2>
        <ul>
          {locations.map((location) => (
            <li
              key={location.id}
              className={selectedLocation.id === location.id ? "active" : ""}
              onClick={() => setSelectedLocation(location)}
            >
              {location.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Map Content */}
      <div className="map-container">
        <h3>{selectedLocation.name}</h3>
        <div className="map-frame">
          <iframe
            src={selectedLocation.url}
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
