import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // handle change
  const hc = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // handle submit
  const hs = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:6800/api/auth/register",
        data
      );
      alert("Registration successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed");
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <form onSubmit={hs}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={data.name}
              onChange={hc}
              className="form-control col-md-4"
              required
            />
          </div>

          <div className="form-group mt-2">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={data.email}
              onChange={hc}
              className="form-control col-md-4"
              required
            />
          </div>

          <div className="form-group mt-2">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={data.password}
              onChange={hc}
              className="form-control col-md-4"
              required
            />
          </div>

          <button className="btn btn-dark mt-3">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
