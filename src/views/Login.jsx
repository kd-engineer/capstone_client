import { Box, Flex } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter, Button, Text, FormControl, FormErrorMessage, Input } from '@chakra-ui/react'


const Login = () => {
  return (
    <Box h="100%">
        <Flex justify="end" align="center" h="100%">
            <Card align="center" pb={4} bg="rgba(225, 225, 225, 0.8)" backdrop-filter="blur(.20rem)" h="100%" w="25%">
                <CardHeader>
                    <Text as='b' fontSize='2xl'>Sign in</Text>
                </CardHeader>
                <CardBody>
                    <FormControl isRequired>
                        <Input 
                            id='input-email'
                            type='email'
                            placeholder='Email'
                        />
                        <Input 
                            mt={2} 
                            id='input-password`'
                            type='password'
                            placeholder='Password'
                        />
                    </FormControl>    
                    <Button 
                        mt={4}
                        w='100%'
                        colorScheme='linkedin' 
                        variant='solid'
                        type='submit'
                    >
                        Sign in
                    </Button>
                </CardBody>
                <CardFooter>
                    Don't have an account?
                    <Button ml={2} colorScheme='linkedin' variant='link'>
                        Sign up
                    </Button>
                </CardFooter>
            </Card>
        </Flex>
    </Box>
  )
}

export default Login
