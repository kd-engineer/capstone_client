import Welcome from "./views/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./views/Dashboard/Browser/Home";
import Friends from "./views/Dashboard/Browser/Friends";
import Group from "./views/Dashboard/Browser/Group";
import Profile from "./views/Dashboard/Browser/Profile";
import Search from "./views/Dashboard/Browser/Search";
import Dashboard from "./views/Dashboard/Dashboard";
import AllFriends from "./components/Allfriends";
import FriendRequest from "./components/FriendRequest";
import Birthdays from "./components/Birthdays";
import CustomList from "./components/CustomList";

const routes = [
  {
    path: "/welcome/*",
    element: <Welcome />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/*",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/friends/*",
        element: <Friends />,
        children: [
          {
            path: "/allfriends",
            element: <AllFriends />,
          },
          {
            path: "/friendrequest",
            element: <FriendRequest />,
          },
          {
            path: "/birthdays",
            element: <Birthdays />,
          },
          {
            path: "/customlist",
            element: <CustomList />,
          },
        ],
      },
      {
        path: "/group",
        element: <Group />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
];

export default routes;
