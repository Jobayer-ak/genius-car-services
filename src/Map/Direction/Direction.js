import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";
import React, { useState } from "react";

const Direction = () => {
  const [formOrigin, setFormOrigin] = useState("");
  const [formDestination, setFormDestination] = useState("");
  const [response, setResponse] = useState(null);
  const origin = "";
  const destination = "";

  const directionsCallback = (res) => {
    console.log(res);

    if (res !== null) {
      if (res.status === "OK") {
        setResponse(res);
      } else {
        console.log("response: ", res);
      }
    }
  };

  const displayDirection = (event) => {
    event.preventDefault();
    const start = event.target.origin.value;
    const end = event.target.destination.value;

    setFormOrigin(start);
    setFormDestination(end);

    console.log(start, end);
  };

  return (
    <div>
      <form onSubmit={displayDirection} className="text-center">
        <input type="text" name="origin" required />
        <br />
        <input type="text" name="destination" required />
        <br />
        <input type="submit" value="Show Direction" />
      </form>
      <LoadScript googleMapsApiKey="AIzaSyCqLMYSthe3SnRhsLaD6QGBYR9yqXPjdXE">
        <GoogleMap
          // required
          id="direction-example"
          // required
          mapContainerStyle={{
            height: "100vh",
            width: "100%",
          }}
          // required
          zoom={16}
          // required
          center={{
            lat: 0,
            lng: -180,
          }}>
          {destination !== "" && origin !== "" && (
            <DirectionsService
              // required
              options={{
                origin: { formOrigin },
                destination: { formDestination },
                travelMode: "DRIVING",
              }}
              // required
              callback={directionsCallback}
            />
          )}

          {response !== null && (
            <DirectionsRenderer
              // required
              options={{
                directions: response,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Direction;
