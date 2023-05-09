import Hero from '../components/Hero'
import '../styles/welcome.css'
import { Route, Routes } from 'react-router-dom'
import routes from '../router'



const Welcome = () => {
  return (
    <>
    <div id='welcome-left'>
      <Hero />
    </div>
    <div id='welcome-right'>
      <Routes>
        {routes[0].children.map((route, index) => {
          return (
            <Route 
              key={index} 
              path={route.path} 
              element={route.element} 
              exact 
            />
          );
        })}
      </Routes>
    </div>
    
    </>
  )
}

export default Welcome
