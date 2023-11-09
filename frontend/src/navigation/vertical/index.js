import { Mail, Home, User, BarChart2, Book } from "react-feather";

const userData = JSON.parse(localStorage.getItem("userJson"));

const role = userData && userData.role;

let routes = [];

if (role == "Admin") {
  routes = [
    {
      id: "admin",
      title: "Admin",
      icon: <User size={20} />,
      navLink: "/admin",
    },
    {
      id: "home",
      title: "Dashboard",
      icon: <Home size={20} />,
      navLink: "/home",
    },
    {
      id: "dataLake",
      title: "Data Lake",
      icon: <Mail size={20} />,
      navLink: "/dataLake",
    },
    {
      id: "action",
      title: "Action",
      icon: <Home size={20} />,
      navLink: "/action",
    },
    {
      id: "reports",
      title: "Reports",
      icon: <Book size={20} />,
      navLink: "/reports",
    },
    {
      id: "advanceReports",
      title: "Advance Reports",
      icon: <BarChart2 size={20} />,
      navLink: "/advanceReports",
    },
  ];
} else {
  routes = [
    {
      id: "home",
      title: "Dashboard",
      icon: <Home size={20} />,
      navLink: "/home",
    },
    {
      id: "dataLake",
      title: "Data Lake",
      icon: <Mail size={20} />,
      navLink: "/dataLake",
    },
    {
      id: "action",
      title: "Action",
      icon: <Home size={20} />,
      navLink: "/action",
    },
    {
      id: "reports",
      title: "Reports",
      icon: <Book size={20} />,
      navLink: "/reports",
    },
    {
      id: "advanceReports",
      title: "Advance Reports",
      icon: <BarChart2 size={20} />,
      navLink: "/advanceReports",
    },
  ];
}

export default routes;
