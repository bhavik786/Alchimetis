import { lazy } from "react";

// ** Document title
const TemplateTitle = "Alchimetis";

// ** Default Route
const DefaultRoute = "/home";

// ** Merge Routes
const Routes = [
  {
    path: "/home",
    component: lazy(() => import("../../views/Home")),
  },
  {
    path: "/admin",
    component: lazy(() => import("../../views/Pages/Admin")),
  },
  {
    path: "/dataLake",
    component: lazy(() => import("../../views/Pages/DateLake")),
  },
  {
    path: "/action",
    component: lazy(() => import("../../views/Pages/Action")),
  },
  {
    path: "/reports",
    component: lazy(() => import("../../views/Pages/Reports")),
  },
  {
    path: "/advanceReports",
    component: lazy(() => import("../../views/Pages/AdvanceReports")),
  },

  {
    path: "/second-page",
    component: lazy(() => import("../../views/SecondPage")),
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/error",
    component: lazy(() => import("../../views/Error")),
    layout: "BlankLayout",
  },
];

export { DefaultRoute, TemplateTitle, Routes };
