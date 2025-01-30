// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import './Map.css';

// const Map = () => {
//   const [selectedNetwork, setSelectedNetwork] = useState(null);

//   const mapStyles = {
//     height: "70vh",
//     width: "100%"
//   };

//   const defaultCenter = {
//     lat: 9.0820, // Nigeria's approximate center
//     lng: 8.6753
//   };

//   const networks = [
//     { id: '5g', name: '5G Network', color: '#FFD700' },
//     { id: '4g', name: '4G Network', color: '#32CD32' },
//     { id: '3g', name: '3G Network', color: '#1E90FF' },
//     { id: '2g', name: '2G Network', color: '#FF6347' },
//     { id: 'fiber', name: 'Fiber - The Home Network', color: '#8A2BE2' }
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
//               className={`network-btn ${selectedNetwork === network.id ? 'active' : ''}`}
//               onClick={() => toggleNetwork(network.id)}
//             >
//               <span className="network-indicator" style={{ backgroundColor: network.color }}></span>
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
//                 stylers: [{ visibility: "on" }]
//               }
//             ],
//             mapTypeControl: false,
//             streetViewControl: false,
//             fullscreenControl: true,
//             zoomControl: true
//           }}
//         >
//           {/* Add markers or overlays here based on selectedNetwork */}
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default Map;
