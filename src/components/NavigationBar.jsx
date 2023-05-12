import React from 'react'
import '../styles/navigationbar.css'
import { ChakraProvider, Avatar, Menu, MenuButton, MenuList, MenuItem, useMediaQuery } from '@chakra-ui/react'
import { NavLink, Link } from 'react-router-dom'
import kd from '../assets/avatar/kd.png'
import bell from '../assets/bell.png'

const NavigationBar = () => {
  return (
    <div id='navigationbar'>
      <div id='brand-logo' className='pl-3'><Link to={"/"}>BRAND NAME</Link></div>
      <div id='navbar'>
        <div id='search-bar'>
          <input className='w-full rounded-full p-1 pl-4' type="text" placeholder='Search'/>
        </div>
        <div id='nav-views'>
          <nav>
            <li className='gap-1'>
                <NavLink className={'nav-link'} to={"/"}>Home
                  <div>
                    <span className='link-space'>
                      <span className='fare'>Home</span>
                      <span className='back'>Home</span>
                    </span>  
                  </div>
                </NavLink>
                <NavLink className={'nav-link'} to={"/friends/allfriends"}>Friends
                  <div>
                    <span className='link-space'>
                      <span className='fare'>Friends</span>
                      <span className='back'>Friends</span>
                    </span>
                  </div>
                </NavLink>
                <NavLink className={'nav-link'} to={"/group"}>Group
                  <div>   
                    <span className='link-space'>
                      <span className='fare'>Group</span>
                      <span className='back'>Group</span>
                    </span>
                  </div>
                </NavLink>
            </li>
          </nav>
        </div>
      </div>
      <div id='profile-nav' className='text-center'></div>
      <ChakraProvider>
        <div id='profile-container' className='flex flex-row justify-end'>
          <div id='notification' className='absolute right-24 bg-gray-700 rounded-full border-2 border-black'>
            <Menu>
                <MenuButton>
                  <Avatar 
                    className='p-2'
                    size='md'
                    src={bell}
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem className='font-bold'>NOTIFICATION</MenuItem>
                  <MenuItem>You have 1 message</MenuItem>
                  <MenuItem>You have 2 friend requests</MenuItem>
                </MenuList>
              </Menu>
          </div>
          <div id='profile-menu'>
            <Menu>
              <MenuButton>
                <Avatar 
                  className='mr-10 border-2'
                  size='md'
                  src={kd}
                />
              </MenuButton>
              <MenuList>
              <Link to={"/profile"}><MenuItem>Profile</MenuItem></Link>
                <MenuItem>Theme</MenuItem>
                <Link to={"/welcome/login"}><MenuItem>Sign out</MenuItem></Link>
              </MenuList>
            </Menu>
          </div>
        </div>
      </ChakraProvider>
    </div>
  )
}

export default NavigationBar
