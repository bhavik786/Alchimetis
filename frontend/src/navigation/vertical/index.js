import {
  Mail,
  Home,
  User,
  BarChart2,
  Book,
  Database,
  UploadCloud,
  Circle,
  Table,
} from "react-feather";

let routes = [];

routes = [
  {
    id: "home",
    title: "Dashboard",
    icon: <Home size={20} />,
    navLink: "/home",
  },
  // {
  //   id: "dataLake",
  //   title: "Data Lake",
  //   icon: <Mail size={20} />,
  //   navLink: "/dataLake",
  // },
  {
    id: "action",
    title: "Action",
    icon: <Home size={20} />,
    navLink: "/action",
  },
  {
    id: "database",
    title: "DataBase",
    icon: <Database size={20} />,

    children: [
      {
        id: "uploadData",
        title: "Upload Data",
        icon: <UploadCloud size={20} />,
        navLink: "/database/uploadData",
      },
      {
        id: "viewData",
        title: "View Data",
        icon: <Table size={12} />,
        navLink: "/database/viewData",
      },
    ],
  },
  // {
  //   id: "reports",
  //   title: "Reports",
  //   icon: <Book size={20} />,
  //   navLink: "/reports",
  // },
  {
    id: "advanceReports",
    title: "Reports",
    icon: <BarChart2 size={20} />,
    navLink: "/advanceReports",
  },
];

export default routes;
