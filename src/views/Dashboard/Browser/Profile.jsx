import NavigationBar from '../../../components/NavigationBar'
import { ChakraProvider, Text } from '@chakra-ui/react'

const Profile = () => {
  return (
    <>
    <NavigationBar />
    <ChakraProvider>
      <div id='content'>
        <Text className='pt-5 text-white'>PROFILE</Text>
      </div>
    </ChakraProvider>
    </>
  )
}

export default Profile
