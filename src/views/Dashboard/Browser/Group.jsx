import { ChakraProvider, Text } from '@chakra-ui/react'
import NavigationBar from "../../../components/NavigationBar"


const Group = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <ChakraProvider>
        <div id="content">
          <Text className='pt-5 text-white'>GROUPS</Text>
        </div>
      </ChakraProvider>
    </>
  )
}

export default Group
