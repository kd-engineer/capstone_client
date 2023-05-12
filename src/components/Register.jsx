import ReactDatePicker from "../components/ReactDatePicker";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChakraProvider, Select, Input } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/register.css";
import http from "../lib/http";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [image, setImage] = useState();
  const [error, setError] = useState({
    firstName: [],
    lastName: [],
    gender: [],
    birthDate: [],
    email: [],
    password: [],
    passwordConfirmation: [],
  });

  async function register(e) {
    e.preventDefault();
    e.stopPropagation();

    const check = checkFields();

    console.log(check);

    if (!check) return;

    try {
      let imageName = "";
      if (image) {
        const formData = new FormData();
        formData.append("image", image);

        const res = await http.post("/upload", formData);

        imageName = res.data.image_name;
      }

      const body = {
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        birthdate: birthDate,
        profile_picture: imageName,
        email,
        password,
      };

      const res = await http.post("/register", body);
      if (res.status === 201) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  function checkFields() {
    let newError = { ...error };

    newError.firstName = !firstName ? ["First name is required"] : [];
    newError.lastName = !lastName ? ["Last name is required"] : [];
    newError.gender = !gender ? ["Gender is required"] : [];
    newError.birthDate = !birthDate ? ["Birth Date is required"] : [];
    newError.email = !email ? ["Email is required"] : [];
    newError.password = !password ? ["Password is required"] : [];
    newError.passwordConfirmation = !passwordConfirmation
      ? ["Password is required"]
      : [];

    if (password !== passwordConfirmation) {
      newError.password.push("Password is not equal");
    }

    setError(newError);

    return (
      firstName &&
      lastName &&
      gender &&
      birthDate &&
      email &&
      password &&
      password === passwordConfirmation
    );
  }

  return (
    <ChakraProvider>
      <div id="register">
        <h1 className="mt-5 p-5 text-center font-bold text-3xl">Sign up</h1>
        <form onSubmit={register} className="contact-form">
          <div id="full_name">
            <input
              className="contact-form-namep"
              id="first_name"
              type="text"
              placeholder="First Name"
              name="first_name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="contact-form-namep"
              id="last_name"
              type="text"
              placeholder="Last Name"
              name="last_name"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            className="contact-form-textp"
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="contact-form-textp"
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div id="dp" className="flex flex-row gap-1 -mt-4">
            <ReactDatePicker
              id="birthdate"
              type="date"
              name="birthdate"
              required
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <Select
              id="gender"
              className="contact-form-textp pt-1"
              placeholder="Gender"
              name="gender"
              required
              onChange={setGender}
            >
              <option value="Boy">Boy</option>
              <option value="Girl">Girl</option>
            </Select>
          </div>
          <Input
            className="contact-form-textp -mt-0"
            _placeholder={{ opacity: 1, color: "gray.500" }}
            id="image"
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <div className="btn">
            <button
              type="submit"
              className="contact-form-btnp font-bold bg-black"
            >
              Sign up
            </button>
          </div>
          <h1 className="mt-5 pt-5 text-center">
            Already have an account?
            <span className="text-DP font-bold cursor-pointer">
              <Link to={"/welcome/login"}> Sign in</Link>
            </span>
          </h1>
        </form>
      </div>
    </ChakraProvider>
  );
};

export default Register;
