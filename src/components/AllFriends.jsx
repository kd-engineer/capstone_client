import React from "react";
import {
  ChakraProvider,
  SimpleGrid,
  Text,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import Lance from "../assets/avatar/lance.png";
import Russel from "../assets/avatar/russel.png";

const AllFriends = () => {
  return (
    <ChakraProvider>
      <SimpleGrid
        columns={[1, 2, 3, 4, 5]}
        gap={10}
        className="flex justify-center p-10"
      >
        <Box
          borderTopLeftRadius={20}
          borderBottomRightRadius={20}
          h={"300px"}
          w={"200px"}
          className="t-scale truncate"
        >
          <Image h={"200px"} objectFit="cover" src={Lance}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              Lancer Dayap
            </Text>
            <Button colorScheme="blue" size="sm" className="text-white">
              View Profile
            </Button>
          </Box>
        </Box>
        <Box
          borderTopLeftRadius={20}
          borderBottomRightRadius={20}
          h={"300px"}
          w={"200px"}
          className="t-scale truncate"
        >
          <Image h={"200px"} objectFit="cover" src={Russel}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              Russel King Cadiang
            </Text>
            <Button colorScheme="blue" size="sm" className="text-white">
              View Profile
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
    </ChakraProvider>
  );
};

export default AllFriends;
