import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login as authLogin } from "../slice/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const handleLogin = async (data) => {
    setError("");
    try {
      const user = await authService.login(data);
      if (user) {
        const userData = await authService.getCurrentAccount();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <Input
          label="Email "
          type="email"
          placeholder="Enter Your Email"
          {...register("email", { required: true })}
        />
        <Input
          label="Password"
          type="password"
          placeholder="Enter Your Password"
          {...register("password", { required: true })}
        />
        <Button type="submit">Log In</Button>
      </form>
    </div>
  );
}

export default Login;
