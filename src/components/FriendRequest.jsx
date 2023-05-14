import React from "react";
import {
  ChakraProvider,
  Card,
  SimpleGrid,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Box,
} from "@chakra-ui/react";
import Stephen from "../assets/stephen.jpg";
import JL from "../assets/avatar/jl.png";
import Aiah from "../assets/avatar/aiah.png";
import Mikha from "../assets/avatar/mikha.png";

const FriendRequest = () => {
  return (
    <ChakraProvider>
      <SimpleGrid
        spacingX="10px"
        spacingY="20px"
        minChildWidth="200px"
        mx="auto"
        className="flex justify-center p-10"
      >
        <Box
          borderTopLeftRadius={20}
          borderBottomRightRadius={20}
          h={"300px"}
          w={"200px"}
          className="t-scale truncate"
        >
          <Image h={"200px"} objectFit="cover" src={Stephen}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              Stephen Strange
            </Text>
            <ButtonGroup className="justify-center">
              <Button colorScheme="blue" size="sm" className="text-white">
                Accept
              </Button>
              <Button colorScheme="red" size="sm">
                Decline
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Box
          borderTopLeftRadius={20}
          borderBottomRightRadius={20}
          h={"300px"}
          w={"200px"}
          className="t-scale truncate"
        >
          <Image h={"200px"} objectFit="cover" src={Stephen}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              Stephen Strange
            </Text>
            <ButtonGroup className="justify-center">
              <Button colorScheme="blue" size="sm" className="text-white">
                Accept
              </Button>
              <Button colorScheme="red" size="sm">
                Decline
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Box
          borderTopLeftRadius={20}
          borderBottomRightRadius={20}
          h={"300px"}
          w={"200px"}
          className="t-scale truncate"
        >
          <Image h={"200px"} objectFit="cover" src={Stephen}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              Stephen Strange
            </Text>
            <ButtonGroup className="justify-center">
              <Button colorScheme="blue" size="sm" className="text-white">
                Accept
              </Button>
              <Button colorScheme="red" size="sm">
                Decline
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Box
          borderTopLeftRadius={20}
          borderBottomRightRadius={20}
          h={"300px"}
          w={"200px"}
          className="t-scale truncate"
        >
          <Image h={"200px"} objectFit="cover" src={Stephen}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              Stephen Strange
            </Text>
            <ButtonGroup className="justify-center">
              <Button colorScheme="blue" size="sm" className="text-white">
                Accept
              </Button>
              <Button colorScheme="red" size="sm">
                Decline
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default FriendRequest;
