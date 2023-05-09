import NavigationBar from "../../../components/NavigationBar"
import '../../../styles/home.css'
import { ChakraProvider, Card, CardHeader, CardBody, CardFooter, Box, Avatar, Input, Icon, Text, Image } from "@chakra-ui/react"
import kd from '../../../assets/avatar/kd.png'
import lance from '../../../assets/avatar/lance.png'
import russel from '../../../assets/avatar/russel.png'
import { BsCameraReels, } from 'react-icons/bs'
import { FaPhotoVideo } from 'react-icons/fa'
import { MdPublic } from 'react-icons/md'
import { BiLike } from 'react-icons/bi'

const Home = () => {
  return (
    <>
      <ChakraProvider>
        <div id='content' className="p-1">
          <div id="post-section">
            <div id="post-menu" className="scrollable-div flex flex-col gap-y-2 px-3 pr-20">
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
            </div>


            <div id="post-view" className="scrollable-div flex flex-col gap-y-4">
              <Card>
                <Box borderTopRadius={10} className="bg-gray-800 p-2 flex flex-row">
                  <Avatar
                    size='md'
                    src={kd} 
                  />
                  <Input borderRadius={50} className="ml-2 mt-1" placeholder='Want to post something?' size='md'/>
                </Box>
                <CardFooter borderBottomRadius={10} className="h-12 flex flex-row justify-center items-center bg-gray-800 text-white gap-10 border-t-2">
                  <div className="flex flex-row cursor-pointer">
                    <Icon className="mt-1" as={BsCameraReels} />
                    <Text className="ml-2">Live Video</Text>
                  </div>
                  <div className="flex flex-row cursor-pointer items-center">
                    <Icon className="mt-1" as={FaPhotoVideo} />
                    <Text className="ml-2">Photo/Video</Text>
                  </div>
                </CardFooter>
              </Card>

              <Card>
                <div className="flex flex-row bg-gray-600 p-2 rounded-t-lg">
                  <Avatar
                    size='sm'
                    src={kd} 
                  />
                  <div>
                    <Text className="ml-2 font-bold text-sm">Kevin Durante</Text>
                    <Text className="ml-2 text-xs">1m<Icon className="ml-1 mb-1" as={MdPublic} /></Text>
                  </div>
                </div>
                <div>
                  <Text className="pl-4 pb-2 text-sm font-semibold bg-gray-600">Profile Photo</Text>
                  </div>
                <Image src={kd}></Image>
                <div className="flex flex-row justify-center h-8 gap-20 bg-white">
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
                <CardFooter borderBottomRadius={10}  className="bg-gray-700 flex flex-col">
                  <Text>View more comments</Text>
                  <div className="flex flex-row mt-2">
                    <Avatar
                      size='sm'
                      src={russel} 
                    />
                    <div className="flex flex-col w-full">
                      <Text className="bg-gray-600 font-bold text-sm ml-2 w-full p-1 rounded-t-lg">Russel</Text>
                      <Text className="bg-gray-600 ml-2 w-full p-1 rounded-b-lg">Okay!</Text>
                    </div>
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
                    <Input borderRadius={50} className="ml-2 bg-gray-700 mt-1 h-4" type="text" placeholder="Write a comment" />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader borderTopRadius="10" className="flex flex-row bg-gray-600">
                  <Avatar
                    size='md'
                    src={lance} 
                  />
                  <div>
                    <Text className="ml-2 font-bold">Lance</Text>
                    <Text className="ml-2">1m<Icon className="ml-1 mb-1" as={MdPublic} /></Text>
                  </div>
                </CardHeader>
                <CardBody className="bg-gray-600">
                  <Text className="bg-gray-600 -mt-6">Draft pa lang ito</Text>
                </CardBody>
                <div className="flex flex-row justify-center h-8 gap-20 bg-white">
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
                <CardFooter borderBottomRadius={10}  className="bg-gray-700 flex flex-col">
                  <Text>View more comments</Text>
                  <div className="flex flex-row mt-2">
                    <Avatar
                      size='sm'
                      src={russel} 
                    />
                    <div className="flex flex-col w-full">
                      <Text className="bg-gray-600 font-bold text-sm ml-2 w-full p-1 rounded-t-lg">Russel</Text>
                      <Text className="bg-gray-600 ml-2 w-full p-1 rounded-b-lg">Okay!</Text>
                    </div>
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
                    <Input borderRadius={50} className="ml-2 bg-gray-700 mt-1 h-4" type="text" placeholder="Write a comment" />
                  </div>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader borderTopRadius="10" className="flex flex-row bg-gray-600">
                  <Avatar
                    size='md'
                    src={lance} 
                  />
                  <div>
                    <Text className="ml-2 font-bold">Lance</Text>
                    <Text className="ml-2">1m<Icon className="ml-1 mb-1" as={MdPublic} /></Text>
                  </div>
                </CardHeader>
                <CardBody className="bg-gray-600">
                  <Text className="bg-gray-600 -mt-6">Draft pa lang ito</Text>
                </CardBody>
                <div className="flex flex-row justify-center h-8 gap-20 bg-white">
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
                <CardFooter borderBottomRadius={10}  className="bg-gray-700 flex flex-col">
                  <Text>View more comments</Text>
                  <div className="flex flex-row mt-2">
                    <Avatar
                      size='sm'
                      src={russel} 
                    />
                    <div className="flex flex-col w-full">
                      <Text className="bg-gray-600 font-bold text-sm ml-2 w-full p-1 rounded-t-lg">Russel</Text>
                      <Text className="bg-gray-600 ml-2 w-full p-1 rounded-b-lg">Okay!</Text>
                    </div>
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
                    <Input borderRadius={50} className="ml-2 bg-gray-700 mt-1 h-4" type="text" placeholder="Write a comment" />
                  </div>
                </CardFooter>
              </Card>
              
              
            </div>
          </div>
          <div id="chat-section" className="scrollable-div">
            CHAT
          </div>
        </div>
      </ChakraProvider>
    </>
  )
}

export default Home
