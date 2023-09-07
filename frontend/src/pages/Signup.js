import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="border border-2 rounded p-4 bg-light" style={{ maxWidth: "400px" }}>
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="mb-0">Sign up</h4>
            <span><Link to={"/"} className="text-decoration-none text-dark"><i className="bi bi-arrow-left"></i> Go Back</Link></span>
          </div>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">User Name</label>
            <input type="text" name="username" placeholder="User Name" className="form-control" value={username} onChange={handleOnChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" placeholder="Email" className="form-control" value={email} onChange={handleOnChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" placeholder="Password" className="form-control" value={password} onChange={handleOnChange} />
          </div>
          <button type="submit" className="btn btn-danger btn-block">Sign up</button>
          <div className="mt-2 text-center">
            Already have an account? <Link to={"/login"} className="text-decoration-none text-danger">Log in</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
