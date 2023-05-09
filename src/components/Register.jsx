
import ReactDatePicker from '../components/ReactDatePicker';
import React, { useState, useRef } from 'react'
import { ChakraProvider, Select } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import '../styles/register.css'


const Register = () => {
    const initialForm = {
        email: "",
        password: "",
        first_name: "",
        last_name: ""
      };

        const [formState, setFormState] = useState(initialForm);
        const { email, password, first_name, last_name } = formState;

        const onSubmit = (e) => {
            e.preventDefault();
            console.log(formState);
        }
        
        const onChange = (e) => {
            const { name, value} = e.target;

            setFormState({...formState, [name]: value});
        };

        const [value, setValue] = React.useState('1')

  return (
    <div>
      <div id='register'>
                <h1 className='mt-5 p-5 text-center font-bold text-3xl'>Sign up</h1>
                <form onSubmit={onSubmit} className='contact-form'>
                  <div id='full_name'>
                    <input 
                      className='contact-form-namep' 
                      id='first_name'
                      type="text" 
                      placeholder='First Name'
                      name='first_name'
                      required
                      value={first_name}
                      onChange={onChange} 
                    />
                    <input 
                      className='contact-form-namep' 
                      id='last_name'
                      type="text" 
                      placeholder='Last Name'
                      name='last_name'
                      required
                      value={last_name}
                      onChange={onChange} 
                    />
                  </div>
                  <input 
                    className='contact-form-textp' 
                    id='email'
                    type="email" 
                    placeholder='Email'
                    name='email'
                    required
                    value={email}
                    onChange={onChange} 
                  />
                  <input 
                    className='contact-form-textp' 
                    id='password'
                    type="password"  
                    placeholder='Password'
                    name='password'
                    required
                    value={password}
                    onChange={onChange}
                  />
                  <div id='dp' className='flex flex-row gap-1 -mt-4'>
                    <ReactDatePicker />
                    <ChakraProvider>
                    <Select className='contact-form-textp' placeholder='Gender'>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </Select>
                    </ChakraProvider>
                  </div>
                  <div className='btn'>
                    <button type='submit' className='contact-form-btnp font-bold bg-black'><Link to={"/"}>Sign up</Link></button>
                  </div>
                  <h1 className='mt-5 pt-5 text-center'>Already have an account? <span className='text-DP font-bold cursor-pointer'> <Link to={"/welcome/login"}>Sign in</Link> </span></h1>
                </form>
              </div>
    </div>
  )
}

export default Register
