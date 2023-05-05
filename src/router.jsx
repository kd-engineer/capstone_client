import Login from './views/Login'
import Home from "./views/Home";
import Profile from "./views/Profile";
import Demo from './views/Demo';

const routes = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/profile",
        element: <Profile />
    },
    {
        path: "/demo",
        element: <Demo />
    }
]

export default routes