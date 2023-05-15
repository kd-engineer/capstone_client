import "../../../styles/home.css";
import React, { useState, useRef, useEffect } from "react";
import {
  ChakraProvider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Avatar,
  Input,
  Icon,
  Text,
  Image,
  useToast,
  Flex,
  Button,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import kd from "../../../assets/avatar/kd.png";
import lance from "../../../assets/avatar/lance.png";
import russel from "../../../assets/avatar/russel.png";
import { BsCameraReels, BsThreeDotsVertical } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { MdPublic } from "react-icons/md";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import http from "../../../lib/http";
import { fromHalfFloat } from "three/src/extras/DataUtils";

const Home = () => {
  const toast = useToast();
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);
  const [activePost, setActivePost] = useState();
  const [comment, setComment] = useState("");
  const isLoggedIn = useRef(JSON.parse(localStorage.getItem("user")));
  const user = useRef(JSON.parse(localStorage.getItem("user")));

  async function getPosts() {
    const res = await http.get("/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setPosts(res.data.data);
  }

  useEffect(() => {
    getPosts();
    return;
  }, []);

  async function submit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!body) {
      return;
    }

    try {
      const payload = {
        body,
        media: "",
      };

      const res = await http.post("/posts", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.status === 201) {
        toast({
          title: "New post created",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        getPosts();
      } else {
        toast({
          title: "Something went wrong",
          status: "danger",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function likePost(postId) {
    const body = {
      post_id: postId,
    };
    await http.post("/likes", body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    getPosts();
  }

  async function unlikePost(likeId) {
    await http.delete(`/likes/${likeId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    getPosts();
  }

  async function submitComment(e) {
    e.preventDefault();
    e.stopPropagation();

    if (!comment) {
      return;
    }

    try {
      const body = {
        post_id: activePost,
        body: comment,
      };

      const res = await http.post("/comments", body, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.status === 201) {
        getPosts();
        setActivePost();
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteComment(commentId) {
    const res = await http.delete(`/comments/${commentId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (res.status === 200) {
      getPosts();
    }
  }

  return (
    <>
      <ChakraProvider>
        <div id="content" className="p-1">
          <div id="post-section">
            {/*  <div id="post-menu" className="scrollable-div flex flex-col gap-y-2 px-3 pr-20">
            <Card>
                <CardHeader borderTopRadius="10" className="flex flex-col bg-gray-600">
                  <div className="flex flex-row">
                    <Avatar

                      size='md'
                      src={lance} 
                    />
                    <div>
                      <Text className="ml-2 font-bold">Lance</Text>
                      <Text className="ml-2">1m<Icon className="ml-1 mb-1" as={MdPublic} /></Text>
                    </div>
                  </div>
                  <Text className="mt-4">LIVE FEED</Text>
                </CardHeader>
                <Image src={lance}></Image>
                <div className="flex flex-row justify-center h-8 gap-10 bg-white">
                  <div className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Like</Text>
                  </div>
                  <div className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Comment</Text>
                  </div>
                  <div className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Share</Text>
                  </div>
                </div>
                <CardFooter borderBottomRadius={10} className="bg-gray-700 flex flex-col">
                  <Text>View more comments</Text>
                  <div className="flex flex-row mt-2">
                    <Avatar
                      size='sm'
                      src={russel} 
                    />
                    <Text className="bg-gray-600 ml-2 w-full rounded-md p-1">Okay!</Text>
                  </div>
                  <div className="flex flex-row gap-5 ml-14">
                    <Text>Like</Text>
                    <Text>Reply</Text>
                  </div>
                  <div className="flex flex-row mt-1">
                    <Avatar
                      size='md'
                      src={kd} 
                    />
                    <Input className="ml-2 bg-gray-700 mt-1 h-4" type="text" placeholder="Write a comment" />
                  </div>
                </CardFooter>
              </Card> 
  </div>*/}

            <div
              id="post-view"
              className="scrollable-div flex flex-col gap-y-2"
            >
              <form onSubmit={submit}>
                <Card>
                  <Box
                    borderRightRadius={50}
                    borderLeftRadius={50}
                    className="bg-gray-800 p-2 pr-3 pl-3 flex flex-row justify-center items-center"
                  >
                    <Avatar className="border-2" size="md" src={kd} />
                    {/*<Avatar
                      className="border-2"
                      size="md"
                      src={`${import.meta.env.VITE_API}/image/${
                        user.current.profile_picture
                      }`}
                    />*/}

                    <Input
                      borderLeftRadius={50}
                      className="ml-2 text-white"
                      placeholder="Want to post something?"
                      size="md"
                      value={body}
                      onChange={(e) => setBody(e.target.value)}
                    />
                    <Button type="submit" borderRightRadius={50} fontSize="xs">
                      POST
                    </Button>
                  </Box>
                  {/*<CardFooter
                    borderBottomRadius={10}
                    className="h-12 flex flex-row justify-center items-center bg-gray-800 text-white gap-10 border-t-2"
                  >
                    <div className="flex flex-row cursor-pointer">
                      {/*<Icon className="mt-1" as={BsCameraReels} />
                    <Text className="ml-2">Post</Text>
                      <Button colorScheme="teal" type="submit">
                        Post
                      </Button>
                    </div>
                    <div className="flex flex-row cursor-pointer items-center">
                      <Icon className="mt-1" as={FaPhotoVideo} />
                      <Text className="ml-2">Photo/Video</Text>
                    </div>
                  </CardFooter>*/}
                </Card>
              </form>

              {/*}  <Flex flexDirection="column" alignItems="center">
                {posts.map((post, index) => {
                  return (
                    <Card key={index} w="500px" mb="4">
                      <CardHeader>
                        <Flex spacing="4">
                          <Flex
                            flex="1"
                            gap="4"
                            alignItems="center"
                            flexWrap="wrap"
                          >
                            <Avatar
                              name={post.user.name}
                              src={`${import.meta.env.VITE_API}/image/${
                                post.user.profile_picture
                              }`}
                            />
                            <Box>
                              <Heading size="sm">{post.user.name}</Heading>
                            </Box>
                          </Flex>
                        </Flex>
                      </CardHeader>
                      <CardBody>
                        <Text
                          dangerouslySetInnerHTML={{ __html: post.body }}
                        ></Text>
                      </CardBody>
                      {post.media && (
                        <Image
                          objectFit="cover"
                          src={`${import.meta.env.VITE_API}/image/${
                            post.media
                          }`}
                        />
                      )}
                      {post.likes > 0 && (
                        <Box p="5">
                          <p>
                            {post.likes}{" "}
                            {post.likes === 1
                              ? "person likes "
                              : "people like "}{" "}
                            this
                          </p>
                        </Box>
                      )}
                      <CardFooter
                        justify="space-between"
                        flexWrap="wrap"
                        sx={{
                          "& > button": {
                            minW: "136px",
                          },
                        }}
                      >
                        {post.isLiked ? (
                          <Button
                            flex="1"
                            colorScheme="teal"
                            onClick={() => unlikePost(post.isLiked)}
                          >
                            Like
                          </Button>
                        ) : (
                          <Button
                            flex="1"
                            variant="ghost"
                            onClick={() => likePost(post.id)}
                          >
                            Like
                          </Button>
                        )}
                        <Button
                          flex="1"
                          variant="ghost"
                          onClick={() => setActivePost(post.id)}
                        >
                          Comment
                        </Button>
                      </CardFooter>
                      {post.id === activePost && (
                        <CardBody>
                          <form onSubmit={submitComment}>
                            <FormControl>
                              <Textarea
                                placeholder="Put your comment here..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                style={{
                                  width: "460px",
                                  height: "75px",
                                }}
                              ></Textarea>
                            </FormControl>
                            <FormControl>
                              <ButtonGroup
                                display="flex"
                                justifyContent="flex-end"
                                p=".3rem"
                              >
                                <Button colorScheme="teal" type="submit">
                                  Post
                                </Button>
                              </ButtonGroup>
                            </FormControl>
                          </form>
                        </CardBody>
                      )}
                      {post.comments.length > 0 && (
                        <CardBody>
                          <Text mb="4">Comments</Text>
                          <Stack divider={<StackDivider />} spacing="4">
                            {post.comments.map((comment, index) => {
                              return (
                                <Box key={index} display="flex">
                                  <Avatar
                                    size="sm"
                                    mr="4"
                                    src={`${import.meta.env.VITE_API}/image/${
                                      comment.user.profile_picture
                                    }`}
                                  ></Avatar>
                                  <Box mr="auto">
                                    <Heading
                                      size="xs"
                                      textTransform="uppercase"
                                    >
                                      {comment.user.name}
                                    </Heading>
                                    <Text pt="2" fontSize="sm">
                                      {comment.body}
                                    </Text>
                                  </Box>
                                  {comment.user.id ===
                                    isLoggedIn.current.id && (
                                    <IconButton
                                      size="sm"
                                      colorScheme="red"
                                      icon={<CloseIcon />}
                                      onClick={() => deleteComment(comment.id)}
                                    />
                                  )}
                                </Box>
                              );
                            })}
                          </Stack>
                        </CardBody>
                      )}
                    </Card>
                  );
                })}
              </Flex>*/}

              <Card borderRadius={50}>
                <div className="flex flex-row bg-gray-600 p-2 rounded-t-lg">
                  <Avatar size="sm" src={kd} />
                  <div>
                    <Text className="ml-2 font-bold text-sm">
                      Kevin Durante
                    </Text>
                    <Text className="ml-2 text-xs">
                      1m
                      <Icon className="ml-1 mb-1" as={MdPublic} />
                    </Text>
                  </div>
                </div>
                <div>
                  <Text className="pl-4 pb-2 text-sm font-semibold bg-gray-600">
                    Profile Photo
                  </Text>
                </div>
                <Image src={kd}></Image>
                <div className="flex flex-row justify-center h-12 gap-10 bg-gray-200">
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Like</Text>
                  </Button>
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Comment</Text>
                  </Button>
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Share</Text>
                  </Button>
                </div>
                <CardFooter
                  borderBottomRadius={10}
                  className="bg-gray-700 flex flex-col"
                >
                  <Text>View more comments</Text>
                  <div className="flex flex-row mt-2">
                    <Avatar size="sm" src={russel} />
                    <div className="flex flex-col w-full">
                      <Text className="bg-gray-600 font-bold text-sm ml-2 w-full p-1 rounded-t-lg">
                        Russel King Cadiang
                      </Text>
                      <Text className="bg-gray-600 ml-2 w-full p-1 rounded-b-lg">
                        Oh!
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 ml-14">
                    <Text>Like</Text>
                    <Text>Reply</Text>
                  </div>
                  <div className="flex flex-row mt-1">
                    <Avatar size="md" src={kd} />
                    <Input
                      borderRadius={50}
                      className="ml-2 bg-gray-700 mt-1 h-4"
                      type="text"
                      placeholder="Write a comment"
                    />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader
                  borderTopRadius="10"
                  className="flex flex-row bg-gray-600"
                >
                  <Avatar size="md" src={lance} />
                  <div>
                    <Text className="ml-2 font-bold">Lancer Dayap</Text>
                    <Text className="ml-2">
                      1m
                      <Icon className="ml-1 mb-1" as={MdPublic} />
                    </Text>
                  </div>
                </CardHeader>
                <CardBody className="bg-gray-600">
                  <Text className="bg-gray-600 -mt-6">Draft pa lang ito</Text>
                </CardBody>
                <div className="flex flex-row justify-center h-12 gap-10 bg-gray-200">
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Like</Text>
                  </Button>
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Comment</Text>
                  </Button>
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Share</Text>
                  </Button>
                </div>
                <CardFooter
                  borderBottomRadius={10}
                  className="bg-gray-700 flex flex-col"
                >
                  <Text>View more comments</Text>
                  <div className="flex flex-row mt-2">
                    <Avatar size="sm" src={russel} />
                    <div className="flex flex-col w-full">
                      <Text className="bg-gray-600 font-bold text-sm ml-2 w-full p-1 rounded-t-lg">
                        Russel King Cadiang
                      </Text>
                      <Text className="bg-gray-600 ml-2 w-full p-1 rounded-b-lg">
                        Okay!
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 ml-14">
                    <Text>Like</Text>
                    <Text>Reply</Text>
                  </div>
                  <div className="flex flex-row mt-1">
                    <Avatar size="md" src={kd} />
                    <Input
                      borderRadius={50}
                      className="ml-2 bg-gray-700 mt-1 h-4"
                      type="text"
                      placeholder="Write a comment"
                    />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader
                  borderTopRadius="10"
                  className="flex flex-row bg-gray-600"
                >
                  <Avatar size="md" src={russel} />
                  <div>
                    <Text className="ml-2 font-bold">Russel King Cadiang</Text>
                    <Text className="ml-2">
                      1m
                      <Icon className="ml-1 mb-1" as={MdPublic} />
                    </Text>
                  </div>
                </CardHeader>
                <CardBody className="bg-gray-600">
                  <Text className="bg-gray-600 -mt-6">Good Morning!</Text>
                </CardBody>
                <div className="flex flex-row justify-center h-12 gap-10 bg-gray-200">
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Like</Text>
                  </Button>
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Comment</Text>
                  </Button>
                  <Button className="flex flex-row cursor-pointer mt-1">
                    <Icon className="mt-1" as={BiLike} />
                    <Text className="ml-2">Share</Text>
                  </Button>
                </div>
                <CardFooter
                  borderBottomRadius={10}
                  className="bg-gray-700 flex flex-col"
                >
                  <Text>View more comments</Text>
                  <div className="flex flex-row mt-2">
                    <Avatar size="sm" src={lance} />
                    <div className="flex flex-col w-full">
                      <Text className="bg-gray-600 font-bold text-sm ml-2 w-full p-1 rounded-t-lg">
                        Lancer Dayap
                      </Text>
                      <Text className="bg-gray-600 ml-2 w-full p-1 rounded-b-lg">
                        Good Morning!
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 ml-14">
                    <Text>Like</Text>
                    <Text>Reply</Text>
                  </div>
                  <div className="flex flex-row mt-1">
                    <Avatar size="md" src={kd} />
                    <Input
                      borderRadius={50}
                      className="ml-2 bg-gray-700 mt-1 h-4"
                      type="text"
                      placeholder="Write a comment"
                    />
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/*<div id="chat-section" className="scrollable-div">
            CHAT
</div>*/}
        </div>
      </ChakraProvider>
    </>
  );
};

export default Home;
