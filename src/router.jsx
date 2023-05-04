import Welcome from "./views/Welcome";
import Home from "./views/Home";
import Profile from "./views/Profile";

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
    }
]

export default routes