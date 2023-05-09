import NavigationBar from '../../../components/NavigationBar'
import { ChakraProvider, Text } from '@chakra-ui/react'
import '../../../styles/friends.css'

const Friends = () => {
  return (
    <>
    <NavigationBar />
    <ChakraProvider>
      <div id='content'>
        <div id='friends-nav'>
          <div>
            <Text className='p-5 text-2xl text-center text-white  font-bold'>FRIENDS</Text>
          </div>
          <div id='friends-nav-list'>
            <Text className='p-2 text-xl text-center text-white font-bold cursor-pointer'>Home</Text>
            <Text className='p-2 text-xl text-center text-white font-bold cursor-pointer'>Friend Requests</Text>
            <Text className='p-2 text-xl text-center text-white font-bold cursor-pointer'>All Friends</Text>
            <Text className='p-2 text-xl text-center text-white font-bold cursor-pointer'>Birthdays</Text>
            <Text className='p-2 text-xl text-center text-white font-bold cursor-pointer'>Custom List</Text>
          </div>
        </div>
        <div id='friends-content'>
          <Text className='pt-5 text-white'>FRIENDS CONTENT</Text>
        </div>
      </div>
    </ChakraProvider>
    </>
  )
}

export default Friends
