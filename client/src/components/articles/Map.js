import React, { useState } from "react";
import "./Map.css";

const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState("trinidad");

  const locations = [
    {
      id: "trinidad",
      name: "Trinidad & Tobago",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.612907173578!2d-60.559902283683066!3d11.323508861952199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c48f8505b35b25f%3A0xae83ceb0ca85f0d1!2sCharlotteville%2C%20Trinidad%20and%20Tobago!5e0!3m2!1sen!2sng!4v1740265867141!5m2!1sen!2sng",
    },
    {
      id: "jamaica",
      name: "Jamaica",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d389547.5569867384!2d-77.32897952563969!3d18.109581357187164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eda2f3d672b8e7d%3A0xe5d8384b439c2b99!2sJamaica!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
    },
    {
      id: "nigeria",
      name: "Nigeria",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4631036623!2d3.1191382840761523!3d6.548369378878717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1740266005394!5m2!1sen!2sng",
    },
    {
      id: "newyork",
      name: "New York",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193747.0318804858!2d-74.10965091884208!3d40.64537482137494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24416947c2109%3A0x82765c7404007886!2sBrooklyn%2C%20NY%2C%20USA!5e0!3m2!1sen!2sng!4v1740266426914!5m2!1sen!2sng",
    },
    {
      id: "india",
      name: "India",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15684575.332635738!2d73.81096329784687!3d20.593684098374655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ffd00f413cf%3A0xb2d9e073ae9f3e1a!2sIndia!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
    },
    {
      id: "cameroon",
      name: "Cameroon",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16169012.318354504!2d8.83112290368056!3d3.8480000314183734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d019a8dd8a1%3A0x4c5f1c5930c53c5d!2sCameroon!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
    },
    {
      id: "cuba",
      name: "Cuba",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1928420.9892193752!2d-80.83287490925517!3d21.521757023486636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd55b40a43f5f5%3A0x5a98c282a9ef0c7e!2sCuba!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
    },
    {
      id: "liberia",
      name: "Liberia",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943887.325234924!2d-11.365505901244888!3d6.428055109499106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc0a2e6b021b6d5%3A0x9b1a7c0dc1a4b5d5!2sLiberia!5e0!3m2!1sen!2sng!4v1738830453821!5m2!1sen!2sng",
    },
  ];

  return (
    <div className="map-container">
      <div className="network-controls">
        <h3>Tobago Reads Map</h3>
        <div className="network-buttons">
          {locations.map((location) => (
            <button
              key={location.id}
              className={`network-btn ${
                selectedLocation === location.id ? "active" : ""
              }`}
              onClick={() => setSelectedLocation(location.id)}
            >
              {location.name}
            </button>
          ))}
        </div>
      </div>

      <div className="map-frame">
        <iframe
          src={locations.find((loc) => loc.id === selectedLocation)?.url}
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
