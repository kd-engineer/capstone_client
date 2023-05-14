import { Routes, Route } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";
import "../../styles/dashboard.css";
import routes from "../../router";

const Dashboard = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        {routes[1].children.map((route, index) => {
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
    </>
  );
};

export default Dashboard;
