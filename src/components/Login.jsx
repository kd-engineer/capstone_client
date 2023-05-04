import React, { useState, useRef } from 'react'
import { Drawer, DrawerBody, useDisclosure } from '@chakra-ui/react'
import ReactDatePicker from '../components/ReactDatePicker';
import { Select } from '@chakra-ui/react'


const Login = () => {
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
                <button type='submit' className='contact-form-btn font-bold'>Sign in</button>
              </div>
              <div className='flex flex-row justify-center'>
                <h1 className='mt-5 pt-5 text-center'>Don't have an account? <span className='text-DB font-bold cursor-pointer' ref={btnRef} onClick={onOpen}>Sign up</span></h1> 
              </div>
            </form>
          </div>
          <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerBody>
              <div id='register'>
                <h1 className='mt-5 p-5 text-center font-bold text-3xl'>Sign up</h1>
                <form onSubmit={onSubmit} className='contact-form'>
                  <div id='full_name'>
                    <input 
                      className='contact-form-name' 
                      id='first_name'
                      type="text" 
                      placeholder='First Name'
                      name='first_name'
                      required
                      value={first_name}
                      onChange={onChange} 
                    />
                    <input 
                      className='contact-form-name' 
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
                  <div id='dp' className='flex flex-row gap-1 -mt-4'>
                    <ReactDatePicker />
                    <Select className='contact-form-text' placeholder='Gender'>
                      <option value='male'>Male</option>
                      <option value='female'>Female</option>
                    </Select>
                  </div>
                  <div className='btn'>
                    <button type='submit' className='contact-form-btn font-bold'>Sign up</button>
                  </div>
                  <h1 className='mt-5 pt-5 text-center'>Already have an account? <span className='text-DB font-bold cursor-pointer' onClick={onClose}>Sign in</span></h1>
                </form>
              </div>
            </DrawerBody>
          </Drawer>
        </div>
      </div>
  )
}
 
export default Login
