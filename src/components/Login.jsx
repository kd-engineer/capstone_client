import React, { useState, useRef } from 'react'
import { Drawer, DrawerBody, useDisclosure, Select, ChakraProvider } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../styles/login.css'


const Login = () => {
    const initialForm = {
        email: "",
        password: "",
      };

        const [formState, setFormState] = useState(initialForm);
        const { email, password } = formState;

        const onSubmit = (e) => {
            e.preventDefault();
            console.log(formState);
        }
        
        const onChange = (e) => {
            const { name, value} = e.target;

            setFormState({...formState, [name]: value});
        };

        const { isOpen, onOpen, onClose } = useDisclosure()
        const btnRef = React.useRef()

        const [value, setValue] = React.useState('1')

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
                <button type='submit' className='contact-form-btn font-bold bg-black'><Link to={"/"}>Sign in</Link></button>
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
