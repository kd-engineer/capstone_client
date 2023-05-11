import React from 'react'
import { ChakraProvider, Card, SimpleGrid, Text, CardFooter,ButtonGroup, Button, Image } from '@chakra-ui/react'
import Stephen from '../assets/stephen.jpg'
import JL from '../assets/avatar/jl.png'
import Aiah from '../assets/avatar/aiah.png'
import Mikha from '../assets/avatar/mikha.png'

const FriendRequest = () => {
  return (
    <ChakraProvider>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className='p-10'>

        <Card 
          h={'300px'}
          borderRadius={5} 
          variant={'filled'} 
          className='t-scale truncate'>
          <Image 
            h={'200px'}
            objectFit='cover' 
            src={Stephen}> 
          </Image>
          <CardFooter className='flex flex-col justify-center text-white bg-gray-800'>
            <Text className='font-bold text-center mb-3 ml-0 py-1'>Stephen Strange</Text>
              <ButtonGroup className='justify-center'>
                <Button colorScheme='blue' size='sm' className='text-white'>Accept</Button>
                <Button colorScheme='red' size='sm'>Decline</Button>
              </ButtonGroup>
          </CardFooter>
        </Card>

        <Card 
          h={'300px'}
          borderRadius={5} 
          variant={'filled'} 
          className='t-scale truncate'>
          <Image 
            h={'200px'}
            objectFit='cover' 
            src={JL}> 
          </Image>
          <CardFooter className='flex flex-col justify-center text-white bg-gray-800'>
            <Text className='font-bold text-center mb-3 ml-0 py-1'>JL Toreliza</Text>
              <ButtonGroup className='justify-center'>
                <Button colorScheme='blue' size='sm' className='text-white'>Accept</Button>
                <Button colorScheme='red' size='sm'>Decline</Button>
              </ButtonGroup>
          </CardFooter>
        </Card>
        
        <Card 
          h={'300px'}
          borderRadius={5} 
          variant={'filled'} 
          className='t-scale truncate'>
          <Image 
            h={'200px'}
            objectFit='cover' 
            src={Aiah}> 
          </Image>
          <CardFooter className='flex flex-col justify-center text-white bg-gray-800'>
            <Text className='font-bold text-center mb-3 ml-0 py-1'>Aiah Arceta</Text>
              <ButtonGroup className='justify-center'>
                <Button colorScheme='blue' size='sm' className='text-white'>Accept</Button>
                <Button colorScheme='red' size='sm'>Decline</Button>
              </ButtonGroup>
          </CardFooter>
        </Card>
      
        
        
      </SimpleGrid>
    </ChakraProvider>
  )
}

export default FriendRequest
