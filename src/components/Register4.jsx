import { useEffect, useRef, useState } from "react";
import '../styles/registerAnother.css';

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
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import http from "../lib/http";
import { useNavigate } from "react-router-dom";

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
        password_confirmation: passwordConfirmation,
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
      newError.passwordConfirmation.push("Password is not equal");
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
    <Box className="registration-box"
    bgRepeat='no-repeat'>
      <Flex justify="center" align="center" h="100%">
        <Card className="registration-card" w="500px">
          <CardHeader align="center">
            <Heading className='font-bold text-3xl' >Sign up</Heading>
          </CardHeader>
          <CardBody>
            <form onSubmit={register}>
              <FormControl
                mb="1rem"
                isRequired
                isInvalid={error.firstName.length}
              >
                <FormLabel className="registration-form-label">
                </FormLabel>
                <Input
                placeholder="First Name"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="registration-form-input"
                />
                {error.firstName.map((err, index) => {
                  return (
                    <FormErrorMessage
                      key={index}
                      className="registration-form-error"
                    >
                      {err}
                    </FormErrorMessage>
                  );
                })}
              </FormControl>
              <FormControl
                mb="1rem"
                isRequired
                isInvalid={error.lastName.length}
              >
                <FormLabel className="registration-form-label"></FormLabel>
                <Input
                placeholder="Last Name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="registration-form-input"
                />
                {error.lastName.map((err, index) => {
                  return (
                    <FormErrorMessage
                      key={index}
                      className="registration-form-error"
                    >
                      {err}
                    </FormErrorMessage>
                  );
                })}
              </FormControl>
              <FormControl mb="1rem" isRequired isInvalid={false}>
                <FormLabel className="registration-form-label">Gender</FormLabel>
                <RadioGroup value={gender} onChange={setGender}>
                  <Stack direction="row">
                    <Radio value="Boy" className="registration-form-radio">
                      Boy
                    </Radio>
                    <Radio value="Girl" className="registration-form-radio">
                      Girl
                    </Radio>
                    <Radio value="Other" className="registration-form-radio">
                      Other
                    </Radio>
                  </Stack>
                </RadioGroup>
                {error.gender.map((err, index) => {
                  return (
                    <FormErrorMessage
                      key={index}
                      className="registration-form-error"
                    >
                      {err}
                    </FormErrorMessage>
                  );
                })}
              </FormControl>
              <FormControl
                mb="1rem"
                isRequired
                isInvalid={error.birthDate.length}
              >
                <FormLabel className="registration-form-label">Birth Date</FormLabel>
                <Input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="registration-form-input"
                />
                {error.birthDate.map((err, index) => {
                  return (
                    <FormErrorMessage
                      key={index}
                      className="registration-form-error"
                    >
                      {err}
                    </FormErrorMessage>
                  );
                })}
              </FormControl>
              <FormControl mb="1rem">
                <FormLabel className="registration-form-label">
                  Profile Picture
                </FormLabel>
                <Input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  className="registration-form-input"
                />
              </FormControl>
              <FormControl mb="1rem" isRequired isInvalid={error.email.length}>
                <FormLabel className="registration-form-label">
                </FormLabel>
                <Input
                placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="registration-form-input"
                  />
                  {error.email.map((err, index) => {
                  return (
                  <FormErrorMessage key={index} className="registration-form-error">
                  {err}
                  </FormErrorMessage>
                  );
                  })}
                  </FormControl>
                  <FormControl
                             mb="1rem"
                             isRequired
                             isInvalid={error.password.length}
                             className="registration-form-control"
                           >
                  <FormLabel className="registration-form-label"></FormLabel>
                  <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="registration-form-input"
                  />
                  {error.password.map((err, index) => {
                  return (
                  <FormErrorMessage key={index} className="registration-form-error">
                  {err}
                  </FormErrorMessage>
                  );
                  })}
                  </FormControl>
                  <FormControl
                             mb="1rem"
                             isRequired
                             isInvalid={error.password.length}
                             className="registration-form-control"
                           >
                  <FormLabel className="registration-form-label"></FormLabel>
                  <Input
                  placeholder="Password"
                  type="password"
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  className="registration-form-input"
                  />
                  {error.password.map((err, index) => {
                  return (
                  <FormErrorMessage key={index} className="registration-form-error">
                  {err}
                  </FormErrorMessage>
                  );
                  })}
                  </FormControl>
                  <FormControl className="registration-form-control">
                  <ButtonGroup
                               display="flex"
                               justifyContent="flex-end"
                               className="registration-form-button-group"
                             >
                  <Button colorScheme="black" variant='solid' type="submit" className="registration-form-button">
                  Register
                  </Button>
                  <Button
                  onClick={() => navigate('/welcome/login')}
                  className="registration-form-button"
                  >
                  Login
                  </Button>
                  </ButtonGroup>
                  </FormControl>
                  </form>
                  </CardBody>
                  </Card>
                  </Flex>
                  </Box>
                  );
};

export default Register;
