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
    path: "/sustainabilityPage",
    component: lazy(() => import("../../views/Pages/SustainabilityReportPage")),
  },

  {
    path: "/griFrameworkPage",
    component: lazy(() => import("../../views/Pages/GriFramework")),
  },
  {
    path: "/viewEmissionReportPage",
    component: lazy(() => import("../../views/Pages/EmissionReportPage")),
  },
  {
    path: "/viewEnergyReportPage",
    exact: true,
    component: lazy(() =>
      import("../../views/Pages/EnergyReportPage/EnergyReportPage.js")
    ),
  },
  {
    path: "/viewWaterReportPage",
    component: lazy(() => import("../../views/Pages/WaterReportPage.js")),
  },
  {
    path: "/viewWasteReportPage",
    component: lazy(() => import("../../views/Pages/WasteReportPage.js")),
  },

  {
    path: "/viewEnergyReportPage/viewElectricity",
    exact: true,
    component: lazy(() =>
      import("../../views/Pages/EnergyReportPage/ElectricityPage.js")
    ),
  },
  {
    path: "/viewEnergyReportPage/viewNaturalGas",
    exact: true,
    component: lazy(() =>
      import("../../views/Pages/EnergyReportPage/NaturalGasPage.js")
    ),
  },
  {
    path: "/viewEnergyReportPage/viewStationaryFuel",
    exact: true,
    component: lazy(() =>
      import("../../views/Pages/EnergyReportPage/StationaryFuelPage.js")
    ),
  },
  {
    path: "/viewEnergyReportPage/viewHeatingAndCooling",
    exact: true,
    component: lazy(() =>
      import("../../views/Pages/EnergyReportPage/HeatingAndCoolingPage.js")
    ),
  },
  {
    path: "/viewEnergyReportPage/viewTransportFuel",
    exact: true,
    component: lazy(() =>
      import("../../views/Pages/EnergyReportPage/TransportFuelPage.js")
    ),
  },

  {
    path: "/griStandardSelectionPage",
    exact: true,
    component: lazy(() =>
      import("../../views/Pages/GriStandardSelectionPage.js")
    ),
  },
  {
    path: "/second-page",
    component: lazy(() => import("../../views/SecondPage")),
  },
  {
    path: "/database/uploadData",
    component: lazy(() => import("../../views/Pages/DataBase/DataBasePage.js")),
  },
  {
    path: "/database/viewData",
    component: lazy(() => import("../../views/Pages/DataBase/CsvFileList.js")),
  },
  {
    path: "/login",
    component: lazy(() => import("../../views/Pages/Authentication/Login")),
    layout: "BlankLayout",
    meta: {
      authRoute: true,
    },
  },
  {
    path: "/register",
    component: lazy(() =>
      import("../../views/Pages/Authentication/RegisterPage")
    ),
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
