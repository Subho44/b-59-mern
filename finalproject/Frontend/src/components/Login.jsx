import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
     const res =  await axios.post(
        "http://localhost:6800/api/auth/login",
        data
      );
      localStorage.setItem('token',res.data.token);
      navigate("/home");
    } catch (error) {
      console.error(error);
      alert("login failed");
    }
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <form onSubmit={hs}>

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

          <button className="btn btn-dark mt-3">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
