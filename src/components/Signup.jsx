import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../appwrite/auth";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { login as authLogin } from "../store/authSlice";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState(null);

  const create = async (data) => {
    setError(null);
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const user = await authService.getCurrentUser();
        if (user) {
          dispatch(authLogin(user));
          navigate("/all-posts");
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-gray-800">Create an Account</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="space-y-4">
          <Input
            label="Name"
            type="text"
            placeholder="Your name"
            {...register("name", { required: true })}
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            {...register("email", { required: true })}
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            {...register("password", { required: true })}
          />
          <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-900 cursor-pointer">
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
