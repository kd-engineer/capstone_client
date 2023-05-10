import React, { useState, useRef } from 'react'
import { Drawer, DrawerBody, useDisclosure, Select, ChakraProvider } from '@chakra-ui/react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/login.css'
import http from "../lib/http";

const Login = () => {
  const initialForm = {
    email: "",
    password: "",
  };

  const [formState, setFormState] = useState(initialForm);
  const { email, password } = formState;

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await http.post('/login', { email, password });
      console.log(response.data); // do something with the response data
      navigate('/');
    } catch (error) {
      console.error(error);
      // handle the error here
    }
  }
  
  const onChange = (e) => {
    const { name, value} = e.target;

    setFormState({...formState, [name]: value});
  };

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const [value, setValue] = useState('1')

  return (
    <div id='login_container'>
      <div>
        <div id='login'>
          <h1 className='mt-5 p-5 text-center font-bold text-3xl'>Sign in</h1>
          <form onSubmit={onSubmit} className='contact-form'>
            <input 
              className='contact-form-text' 
              id='email'
              type="email" 
              placeholder='Email'
              name='email'
              required
              value={email}
              onChange={onChange} 
            />
            <input 
              className='contact-form-text' 
              id='password'
              type="password"  
              placeholder='Password'
              name='password'
              required
              value={password}
              onChange={onChange}
            />
            <div className='btn'>
              <button type='submit' className='contact-form-btn font-bold bg-black'>Sign in</button>
            </div>
            <div className='flex flex-row justify-center'>
              <h1 className='mt-5 pt-5 text-center'>Don't have an account? <span className='text-DB font-bold cursor-pointer' > <Link to={"/welcome/register"}> Sign up</Link></span></h1> 
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
 
export default Login
