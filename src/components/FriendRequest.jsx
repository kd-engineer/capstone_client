import React from 'react'
import { ChakraProvider, Card, SimpleGrid, CardHeader, Heading, CardBody, Text, CardFooter,ButtonGroup, Button, Image } from '@chakra-ui/react'
import Stephen from '../assets/stephen.jpg'
import JL from '../assets/avatar/jl.png'
import Aiah from '../assets/avatar/aiah.png'
import Mikha from '../assets/avatar/mikha.png'

const FriendRequest = () => {
  return (
    <ChakraProvider>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className='p-10'>
        <Card variant={'filled'}>
        <Image 
          boxSize='250px'
          objectFit='cover' 
          src={Stephen}> 
        </Image>
       <CardFooter className='flex flex-col'>
       <Text className='font-bold text-lg mx-auto mb-3'>Stephen Strange</Text>
            <ButtonGroup>
                <Button colorScheme='blue' className='text-white'>Accept</Button>
                <Button colorScheme='red'>Decline</Button>
              </ButtonGroup>
          </CardFooter>
        </Card>
        
        <Card variant={'filled'}>
        <Image 
          boxSize='250px'
          objectFit='cover' 
          src={JL}> 
        </Image>
       <CardFooter className='flex flex-col'>
       <Text className='font-bold text-lg mx-auto mb-3'>JL Toreliza</Text>
            <ButtonGroup>
                <Button colorScheme='blue' className='text-white'>Accept</Button>
                <Button colorScheme='red'>Decline</Button>
              </ButtonGroup>
          </CardFooter>
        </Card>

        <Card variant={'filled'}>
        <Image 
          boxSize='250px'
          objectFit='cover' 
          src={Aiah}> 
        </Image>
       <CardFooter className='flex flex-col'>
       <Text className='font-bold text-lg mx-auto mb-3'>Aiah Arceta </Text>
            <ButtonGroup>
                <Button colorScheme='blue' className='text-white'>Accept</Button>
                <Button colorScheme='red'>Decline</Button>
              </ButtonGroup>
          </CardFooter>
        </Card>

        <Card variant={'filled'}>
        <Image 
          boxSize='250px'
          objectFit='cover' 
          src={Mikha}> 
        </Image>
       <CardFooter className='flex flex-col'>
       <Text className='font-bold text-lg mx-auto mb-3'>Mikha Lim</Text>
            <ButtonGroup>
                <Button colorScheme='blue' className='text-white'>Accept</Button>
                <Button colorScheme='red'>Decline</Button>
              </ButtonGroup>
          </CardFooter>
        </Card>

        
        
      </SimpleGrid>
    </ChakraProvider>
  )
}

export default FriendRequest
