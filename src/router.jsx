import Welcome from "./views/Welcome";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Demo from './views/Demo';

const routes = [
    {
        path: "/login",
        element: <Welcome />
    },
    {
        path: "/login",
        element: <Welcome />
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