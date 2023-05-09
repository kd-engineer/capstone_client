import Welcome from "./views/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./views/Dashboard/Browser/Home";
import Friends from './views/Dashboard/Browser/Friends';
import Group from "./views/Dashboard/Browser/Group";
import Profile from "./views/Dashboard/Browser/Profile";
import Demo from './views/Demo';
import Dashboard from "./views/Dashboard/Dashboard";

const routes = [
    {
        path: "/welcome/*",
        element: <Welcome />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
    {
        path: "/*",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/friends",
                element: <Friends />
            },
            {
                path: "/group",
                element: <Group />
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
    }
]

export default routes