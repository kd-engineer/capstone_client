import React, { useState, useRef, useEffect } from "react";
import "../styles/navigationbar.css";
import {
  ChakraProvider,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  Text,
  useToast,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import kd from "../assets/avatar/kd.png";
import bell from "../assets/bell.png";
import http from "../lib/http";

const NavigationBar = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [selectedFr, setSelectedFr] = useState();
  const [fr, setFr] = useState([]);
  const user = useRef(JSON.parse(localStorage.getItem("user")));

  async function submit(e) {
    e.preventDefault();
    e.stopPropagation();
    if (!searchTerm) {
      return;
    }
    navigate(`/search/${searchTerm}`);
    navigate(0);
  }

  async function getFrs() {
    const res = await http.get("/friend-requests", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setFr(res.data.data);
  }

  function openModal(fr) {
    setModalTitle(fr.user);
    setSelectedFr(fr);
    onOpen();
  }

  async function logout() {
    await http.post(
      "/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    localStorage.clear();
    navigate("/login");
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

  return (
    <ChakraProvider>
      <div id="navigationbar">
        <div id="brand-logo" className="pl-3">
          <Link to={"/"}>BRAND NAME</Link>
        </div>
        <div id="navbar">
          <div id="search-bar">
            <form onSubmit={submit}>
              <input
                className="w-full rounded-full p-1 pl-4"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
          <div id="nav-views">
            <nav>
              <li className="gap-1 browser-nav">
                <NavLink className={"nav-link"} to={"/"}>
                  Home
                  <div>
                    <span className="link-space">
                      <span className="fare">Home</span>
                      <span className="back">Home</span>
                    </span>
                  </div>
                </NavLink>
                <NavLink className={"nav-link"} to={"/friends/allfriends"}>
                  Friends
                  <div>
                    <span className="link-space">
                      <span className="fare">Friends</span>
                      <span className="back">Friends</span>
                    </span>
                  </div>
                </NavLink>
                <NavLink className={"nav-link"} to={"/group"}>
                  Group
                  <div>
                    <span className="link-space">
                      <span className="fare">Group</span>
                      <span className="back">Group</span>
                    </span>
                  </div>
                </NavLink>
              </li>
              <li className="device-nav">
                <NavLink className={"nav-link"} to={"/"}>
                  <Text
                    w="100%"
                    className="absolute"
                    fontSize={{ base: "10px" }}
                  >
                    Home
                  </Text>
                </NavLink>
                <NavLink className={"nav-link"} to={"/friends/allfriends"}>
                  <Text
                    w="100%"
                    className="absolute"
                    fontSize={{ base: "10px" }}
                  >
                    Friends
                  </Text>
                </NavLink>
                <NavLink className={"nav-link"} to={"/group"}>
                  <Text
                    w="100%"
                    className="absolute"
                    fontSize={{ base: "10px" }}
                  >
                    Group
                  </Text>
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
        <div id="profile-nav" className="text-center"></div>

        <div id="profile-container" className="flex flex-row justify-end pl-3">
          <div
            id="notification"
            className="absolute right-12 bg-gray-700 rounded-full border-2 border-black"
          >
            <Menu>
              <MenuButton>
                <Avatar
                  className="avatar=notif p-2"
                  size={{ base: "xs", md: "md" }}
                  src={bell}
                />
              </MenuButton>
              <MenuList>
                <MenuItem className="font-bold">NOTIFICATION</MenuItem>
                <MenuItem>You have 1 message</MenuItem>
                <MenuItem>You have 2 friend requests</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div id="profile-menu">
            <Menu>
              <MenuButton>
                <Avatar
                  className="avatar-profile border-2"
                  size={{ base: "xs", md: "md" }}
                  src={`${import.meta.env.VITE_API}/image/${
                    user.current.profile_picture
                  }`}
                />
              </MenuButton>
              <MenuList>
                <Link to={"/profile"}>
                  <MenuItem>Profile</MenuItem>
                </Link>
                <MenuItem>Theme</MenuItem>
                <Link to={"/welcome/login"}>
                  <MenuItem>Sign out</MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default NavigationBar;
