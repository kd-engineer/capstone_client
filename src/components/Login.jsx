import React, { useState, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  useDisclosure,
  Select,
  ChakraProvider,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../styles/login.css";
import http from "../lib/http";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const initialForm = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { email, password } = formState;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await http.post("/login", { email, password });
      if (response.status === 200) {
        setIsLoading(false);
        setFormState(initialForm);
        navigate("/");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Invalid email or password");
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <div id="login">
      <h1 className="mt-5 p-5 text-center font-bold text-3xl">Sign in</h1>
      <form onSubmit={onSubmit} className="contact-form">
        <ChakraProvider>
          {error && (
            <Alert
              borderRadius={10}
              color="red.500"
              status="error"
              fontSize="sm"
              mb={4}
            >
              {error}
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => setError("")}
              />
            </Alert>
          )}
        </ChakraProvider>
        <input
          className="contact-form-text"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          className="contact-form-text"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          required
          value={password}
          onChange={onChange}
        />
        <div className="btn">
          <button type="submit" className="contact-form-btn font-bold bg-black">
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </div>
        <div className="flex flex-row justify-center">
          <h1 className="mt-5 pt-5 text-center">
            Don't have an account?{" "}
            <span className="text-DB font-bold cursor-pointer">
              {" "}
              <Link to={"/welcome/register"}> Sign up</Link>
            </span>
          </h1>
        </div>
      </form>
    </div>
  );
};

export default Login;
