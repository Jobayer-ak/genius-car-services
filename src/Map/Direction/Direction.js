import React, { useState } from "react";
import {
  DirectionsService,
  DirectionsRenderer,
  GoogleMap,
  LoadScript,
} from "@react-google-maps/api";

const Direction = () => {
  const [response, setResponse] = useState(null);

  const origin = "Tarakanda";
  const destination = "Mymensingh";

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

  return (
    <div>
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
                // eslint-disable-line react-perf/jsx-no-new-object-as-prop
                destination: destination,
                origin: origin,
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
                // eslint-disable-line react-perf/jsx-no-new-object-as-prop
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
