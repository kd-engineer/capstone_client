import { ChakraProvider, Text } from '@chakra-ui/react'
import { NavLink, Routes, Route } from 'react-router-dom'
import '../../../styles/friends.css'
import routes from '../../../router'

const Friends = () => {
  return (
    <>

    <ChakraProvider>
      <div id='content'>
        <div id='friends-nav' className='p-5'>
          <div>
            <Text className='p-5 text-2xl text-center text-white  font-bold'>FRIENDS</Text>
          </div>
          <div id='friends-nav-list' className='gap-y-10'>
            <NavLink to={'/friends/allfriends'}>
              <div className='p-2 text-xl text-center text-white font-bold cursor-pointer rounded-lg'>
                All Friends
              </div>
            </NavLink>
            <NavLink to={'/friends/friendrequest'}>
              <div className='p-2 text-xl text-center text-white font-bold cursor-pointer rounded-lg'>
                Friend Requests
              </div>
            </NavLink>
            <NavLink to={'/friends/birthdays'}>
              <div className='p-2 text-xl text-center text-white font-bold cursor-pointer rounded-lg'>
                Birthdays
              </div>
            </NavLink>
            <NavLink to={'/friends/customlist'}>
              <div className='p-2 text-xl text-center text-white font-bold cursor-pointer rounded-lg'>
                Custom List
              </div>
            </NavLink>
          </div>
        </div>
        <div id='friends-content'>
          <Routes>
            {routes[1].children[1].children.map((route, index) => {
              return (
                <Route 
                  key={index} 
                  path={route.path} 
                  element={route.element} 
                  exact 
                />
              );
            })}
          </Routes>
        </div>
      </div>
    </ChakraProvider>
    </>
  )
}

export default Friends
