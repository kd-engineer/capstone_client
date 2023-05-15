import { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  Heading,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  ChakraProvider,
  CloseButton,
} from "@chakra-ui/react";
import http from "../lib/http";
import { useNavigate, Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    email: [],
    password: [],
  });
  const [invalidCreds, setInvalidCreds] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function login(e) {
    e.preventDefault();
    e.stopPropagation();
    setIsLoading(true);

    if (!email || !password) return;

    try {
      const body = {
        email,
        password,
      };
      const res = await http.post("/login", body);
      if (res.status === 200) {
        setIsLoading(false);
        setInvalidCreds("");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      }
    } catch (e) {
      setInvalidCreds(e.response.data.message);
    }
  }

  function checkEmail(value) {
    setEmail(value);
    if (!value) {
      let newError = { ...error };

      newError.email = ["Email is required"];
      setError(newError);
      return false;
    }
    return true;
  }

  function checkPassword(value) {
    setPassword(value);
    if (!value) {
      let newError = { ...error };

      newError.password = ["Password is required"];
      setError(newError);
      return false;
    }
    return true;
  }

  return (
    <div id="login">
      <h1 className="mt-5 p-5 text-center font-bold text-3xl">Sign in</h1>
      <form onSubmit={login} className="contact-form">
        <input
          className="contact-form-text"
          id="email"
          type="email"
          placeholder="Email"
          name="email"
          required
          value={email}
          onChange={(e) => checkEmail(e.target.value)}
        />
        <input
          className="contact-form-text"
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          required
          value={password}
          onChange={(e) => checkPassword(e.target.value)}
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
