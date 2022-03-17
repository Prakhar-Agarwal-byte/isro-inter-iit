import Dashboard from "views/Dashboard.js";
import Home from "views/Home.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
  },
  {
    path: "/",
    name: "Home",
    icon: "nc-icon nc-diamond",
    component: Home,
  },
];
export default routes;
