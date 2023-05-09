import { ChakraProvider } from "@chakra-ui/react"
import { Routes, Route } from 'react-router-dom'
import NavigationBar from "../../components/NavigationBar"
import '../../styles/dashboard.css'
import routes from '../../router'

const Dashboard = () => {
  return (
    <>
    <NavigationBar />
    <ChakraProvider>
      <div className="h-full w-full">
        MAIN CONTENT
      </div>
    </ChakraProvider>
    </>
  )
}

export default Dashboard
