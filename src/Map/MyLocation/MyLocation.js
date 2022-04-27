import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 24.866005041643547,
  lng: 90.42594632053809,
};

function MyLocation() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCqLMYSthe3SnRhsLaD6QGBYR9yqXPjdXE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyLocation);
