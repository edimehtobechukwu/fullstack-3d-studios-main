import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

const Map = () => {
  const customIcon = new Icon({
    iconUrl: "/location-icon.svg",
    iconSize: [38, 38],
  });

  return (
    <MapContainer
      className="w-full h-full z-10"
      center={[33.84343, -118.33396]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[33.84343, -118.33396]} icon={customIcon}>
        <Popup>
          <h2 className="font-semibold">Fullstack3dStudios</h2>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
