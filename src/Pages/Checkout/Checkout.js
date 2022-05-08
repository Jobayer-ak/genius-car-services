import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  if (user) {
    console.log(user);
  }
  // const [user, setUser] = useState({
  //   name: "Kolim Uddin",
  //   email: "kolim@gmail.com",
  //   address: "Tajmahal Road, Mohammadpur",
  //   phone: "01715000000",
  // });

  // const handleAddressChange = (e) => {
  //   console.log(e.target.value);
  //   const { address, ...rest } = user;
  //   const newAddress = e.target.value;
  //   const newUser = { address: newAddress, ...rest };
  //   console.log(newUser);
  // };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: service.name,
      serviceId: serviceId,
      address: e.target.address.value,
      phone: e.target.phone.value,
    }
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="mb-2 w-100"
          type="text"
          name="name"
          value={user.displayName}
          placeholder="Name"
          required
          readOnly
        />
        <br />
        <input
          className="mb-2 w-100"
          type="email"
          name="emai"
          value={user.email}
          placeholder="Email"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="mb-2 w-100"
          type="text"
          name="service"
          value={service.name}
          placeholder="Service Name"
          required
        />
        <br />
        <input
          className="mb-2 w-100"
          type="text"
          name="address"
          placeholder="Address"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="mb-2 w-100"
          type="number"
          name="Phone Number"
          value={user.phone}
          placeholder="Phone Number"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
