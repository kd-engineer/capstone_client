import React from 'react'
import { ChakraProvider, Card, SimpleGrid, CardHeader, Heading, CardBody, Text, CardFooter, Button, Image } from '@chakra-ui/react'
import Lance from '../assets/avatar/lance.png'
import Russel from '../assets/avatar/russel.png'

const Allfriends = () => {
  return (
    <ChakraProvider>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className='p-10'>
      <Card bg='gray.700' variant={'filled'}>
        <Image 
          h={'200px'}
          objectFit='cover' 
          src={Lance}> 
        </Image>
       <CardFooter className='flex flex-col'>
       <Text className='font-bold text-lg text-white mx-auto mb-3'>Lance Dayap</Text>
            <Button colorScheme='blue' className='text-white'>View Profile</Button>
          </CardFooter>
        </Card>

        <Card bg='gray.700' variant={'filled'}>
        <Image 
          h={'200px'}
          objectFit='cover' 
          src={Russel}> 
        </Image>
          <CardFooter className='flex flex-col'>
            <Text className='font-bold text-lg text-white mx-auto mb-3'>Russel King Cadiang</Text>
            <Button colorScheme='blue' className='text-white'>View Profile</Button>
          </CardFooter>
        </Card>

      
          
          
      </SimpleGrid>
    </ChakraProvider>
  )
}

export default Allfriends
