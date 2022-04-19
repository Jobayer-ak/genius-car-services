import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = (event) => {
    event.preventDefault();
  };

  return (
    <div className="register-form">
      <h2 className="text-primary my-4" style={{ textAlign: "center" }}>
        Please Register
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Your Name" />
        <br />
        <input type="email" name="email" placeholder="Email Address" required />
        <br />
        <input type="password" name="password" placeholder="Password" />
        <br />
        <input type="submit" value="Register" />
      </form>
      <p>
        New to Genius Car?{" "}
        <Link
          to="/login"
          className="text-danger text-decoration-none"
          onClick={navigateLogin}>
          Already have an account?
        </Link>
      </p>
    </div>
  );
};

export default Register;
