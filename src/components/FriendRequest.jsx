import React, { useState, useRef, useEffect } from "react";
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
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import Stephen from "../assets/stephen.jpg";
import JL from "../assets/avatar/jl.png";
import Aiah from "../assets/avatar/aiah.png";
import Mikha from "../assets/avatar/mikha.png";
import { useNavigate } from "react-router-dom";
import http from "../lib/http";

const FriendRequest = () => {
  {
    /*} const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [selectedFr, setSelectedFr] = useState();
  const [fr, setFr] = useState([]);
  const user = useRef(JSON.parse(localStorage.getItem("user")));

  async function getFrs() {
    const res = await http.get("/friend-requests", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setFr(res.data.data);
  }

  async function respond(response) {
    const body = {
      response: response,
    };
    const res = await http.put(`/friend-requests/${selectedFr.id}`, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    onClose();
    if (res.status === 200) {
      if (response) {
        toast({
          title: "Friend request accepted",
          description: "You are now friends!",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Friend request denied",
          description: "Boohoo no frens",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
      getFrs();
    }
  }

  useEffect(() => {
    getFrs();
    return;
  }, []);

  function openModal(fr) {
    setModalTitle(fr.user);
    setSelectedFr(fr);
    onOpen();
  }
*/
  }
  return (
    <ChakraProvider>
      {/*} <SimpleGrid
        columns={[2, 3, 4, 5, null]}
        spacing="40px"
        className="flex justify-start p-10"
      >
        {fr.user.map((fr, index) => {
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
                src={`${import.meta.env.VITE_API}/image/${fr.profile_picture}`}
              ></Image>
              <Box
                h={"100px"}
                w={"200px"}
                className="flex flex-col justify-center items-center text-white bg-gray-800"
              >
                <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
                  {fr.user}
                </Text>
                <ButtonGroup className="justify-center">
                  <Button
                    colorScheme="blue"
                    size="sm"
                    className="text-white"
                    onClick={() => respond(true)}
                  >
                    Accept
                  </Button>
                  <Button
                    colorScheme="red"
                    size="sm"
                    onClick={() => respond(false)}
                  >
                    Decline
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>
          );
        })}*/}

      <SimpleGrid
        columns={[1, 2, 3, 4, 5]}
        gap={10}
        className="flex justify-start p-10"
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
          <Image h={"200px"} objectFit="cover" src={Aiah}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              Aiah Arceta
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
          <Image h={"200px"} objectFit="cover" src={JL}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              John Lloyd Toreliza
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
          <Image h={"200px"} objectFit="cover" src={Mikha}></Image>
          <Box
            h={"100px"}
            w={"200px"}
            className="flex flex-col justify-center items-center text-white bg-gray-800"
          >
            <Text className="font-bold text-center items-center mb-3 ml-0 py-1">
              Mikha Lim
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
