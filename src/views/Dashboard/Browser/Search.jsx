import React, { useEffect, useState, useRef } from "react";
import {
  ChakraProvider,
  Box,
  Avatar,
  IconButton,
  useToast,
  SimpleGrid,
  Card,
  Image,
  CardFooter,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { AddIcon } from "@chakra-ui/icons";
import http from "../../../lib/http";

const Search = () => {
  const { searchTerm } = useParams();
  console.log(searchTerm);
  const toast = useToast();
  const [users, setUsers] = useState([]);
  const loggedIn = useRef(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    async function search() {
      const res = await http.get(`/search?first_name=${searchTerm}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsers(res.data.data);
    }
    search();
    return;
  }, []);

  async function addUser(user) {
    const body = {
      user_to: user.id,
    };
    const res = await http.post("/friend-requests", body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (res.status === 201) {
      toast({
        title: "Friend request sent!",
        description: `Waiting for ${user.name} to accept`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Something went wrong...",
        description: "Please try again",
        status: "danger",
        duration: 5000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <ChakraProvider>
        <div id="content">
          <div id="search-content">
            <SimpleGrid
              spacingX="20px"
              spacingY="20px"
              minChildWidth="200px"
              mx="auto"
              className="flex flex-row justify-center p-10 w-full"
            >
              {users.map((user, index) => {
                return (
                  <Box
                    key={index}
                    borderTopLeftRadius={20}
                    borderBottomRightRadius={20}
                    h={"300px"}
                    w={"200px"}
                    className="t-scale truncate"
                  >
                    <Image
                      h={"200px"}
                      objectFit="cover"
                      fallbackSrc="https://via.placeholder.com/150"
                      src={`${import.meta.env.VITE_API}/image/${
                        user.profile_picture
                      }`}
                    ></Image>
                    <Box
                      h={"100px"}
                      w={"200px"}
                      className="flex flex-col justify-center items-center text-white bg-gray-800"
                    >
                      <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
                        <b>{user.name}</b>
                      </Text>
                      <Button
                        colorScheme="blue"
                        size="sm"
                        className="text-white"
                        aria-label="Search database"
                        onClick={() => addUser(user)}
                      >
                        Add Friend
                      </Button>
                    </Box>
                  </Box>
                );
              })}
            </SimpleGrid>
          </div>
        </div>
      </ChakraProvider>
    </>
  );
};

export default Search;
