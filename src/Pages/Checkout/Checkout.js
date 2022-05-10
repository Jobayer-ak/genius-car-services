import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user] = useAuthState(auth);
  // if (user) {
  //   console.log(user);
  //   console.log(user.displayName);
  //   console.log(user.email);
  //   console.log(user.phoneNumber);
  // }
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
    };
    axios
      .post("https://dry-fjord-85963.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order is booked!");
          e.target.reset();
        }
        console.log(response);
      });
    // console.log(order.phone);
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="mb-2 w-100"
          type="text"
          name="name"
          value={user?.displayName}
          placeholder="Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="mb-2 w-100"
          type="email"
          name="emai"
          value={user?.email}
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
          value={service?.name}
          placeholder="Service Name"
          required
          readOnly
          disabled
        />
        <br />
        <input
          className="mb-2 w-100"
          type="text"
          name="address"
          placeholder="Address"
          autoComplete="off"
          required
        />
        <br />
        <input
          className="mb-2 w-100"
          type="number"
          name="phone"
          placeholder="Phone Number"
          autoComplete="off"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
