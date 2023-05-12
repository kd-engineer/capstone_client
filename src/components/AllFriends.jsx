import React from 'react'
import { ChakraProvider, Card, SimpleGrid, Text, CardFooter, Button, Image } from '@chakra-ui/react'
import Lance from '../assets/avatar/lance.png'
import Russel from '../assets/avatar/russel.png'

const AllFriends = () => {
  return (
    <ChakraProvider>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className='p-10'>
      <Card bg='gray.700' variant={'filled'} className='t-scale truncate'>
        <Image 
          h={'250px'}
          objectFit='cover' 
          src={Lance}> 
        </Image>
        <CardFooter className='flex flex-col'>
          <Text className='font-bold text-white text-center'>Lance Dayap</Text>

        </CardFooter>
      </Card>

        <Card bg='gray.700' variant={'filled'} className='t-scale truncate'>
        <Image 
          h={'250px'}
          objectFit='cover' 
          src={Russel}> 
        </Image>
          <CardFooter className='flex flex-col'>
            <Text className='font-bold text-white text-center'>Russel King Cadiang</Text>
            
          </CardFooter>
        </Card>

      </SimpleGrid>
    </ChakraProvider>
  )
}

export default AllFriends
