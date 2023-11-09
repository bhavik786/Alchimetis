/* eslint-disable */
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
  Label,
  Input,
  Button,
} from "reactstrap";
import DonutChart from "../Charts/DonutChart";

import { ThemeColors } from "@src/utility/context/ThemeColors";
import ChartjsBarChart from "../Charts/Barchart";
import { useContext, useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";

const fs = require("fs");

import activityByGroupData from "../Charts/ActivityByGroup.csv";
import activityByPeriodByScope2 from "../Charts/Activity by period by scope 2.csv";
import Select from "react-select";

import ApexLineChart from "../Charts/LineChart";
import LineChart from "../Charts/NewLine";
import PieChart from "../Charts/SimpleReports/PieChart";
import { Zoom, toast } from "react-toastify";
import { SuccessToast, SuccessToastChart } from "../../Toast";
import SimpleBarChart from "../Charts/SimpleReports/BarChart";
import SimpleLineChart from "../Charts/NewLine";
const ReportPage = () => {
  const { readString } = usePapaParse();
  const { colors } = useContext(ThemeColors);
  const labelColor = "#6e6b7b";

  const tooltipShadow = "rgba(0, 0, 0, 0.25)";
  const gridLineColor = "rgba(200, 200, 200, 0.2)";
  const lineChartPrimary = "#666ee8";
  const lineChartDanger = "#ff4961";
  const warningColorShade = "#ffbd1f";
  const warningLightColor = "#FDAC34";
  const successColorShade = "#28dac6";
  const primaryColorShade = "#836AF9";
  const yellowColor = "#ffe800";
  const greyColor = "#4F5D70";
  const infoColorShade = "#299AFF";
  const blueColor = "#2c9aff";
  const blueLightColor = "#84D0FF";
  const greyLightColor = "#EDF1F4";

  const [state, setState] = useState({
    activityByGroupData: [],
    activityByPeriodByScope2: [],
    uploadedFile: {},
    chartFieldsOptions: [],
    csvParsedData: [],
    selectedChartFieldsOptions: [],
    maxNumberBasedOnChart: 0,
    showChart: false,
  });

  function file1() {
    try {
      readString(activityByGroupData, {
        // worker: true,
        download: true,
        header: true,
        // config: {
        //   delimiter: ",",
        // },
        complete: (results) => {
          console.log(results);

          setState({ ...state, activityByGroupData: results.data });
        },
      });
    } catch (error) {}
  }

  function file2() {
    try {
      readString(activityByPeriodByScope2, {
        download: true,
        header: true,

        complete: (results) => {
          console.log(results);

          setState({ ...state, activityByPeriodByScope2: results.data });
        },
      });
    } catch (error) {}
  }

  useEffect(() => {
    convertOptions();
  }, [state.csvParsedData]);
  const chartTypeOptions = [
    { label: "Pie Chart", value: "pieChart" },
    { label: "Bar Chart", value: "barChart" },
    { label: "Line Chart", value: "lineChart" },
  ];

  const convertOptions = () => {
    state.csvParsedData &&
      state.csvParsedData.map((data, index) => {
        if (index == 0) {
          let keysArray = Object.keys(data);
          let fieldOptionsArray = keysArray.map((key) => ({
            label: key,
            value: key,
          }));
          setState({ ...state, chartFieldsOptions: fieldOptionsArray });
          console.log("====================================");
          console.log("map data", fieldOptionsArray);
          console.log("====================================");
        }
      });
  };

  const handleFileUpload = (e) => {
    setState({ ...state, uploadedFile: e.target.files[0] });
    readString(e.target.files[0], {
      download: true,
      header: true,

      complete: (results) => {
        setState({ ...state, csvParsedData: results && results.data });
      },
    });
  };

  const handleChartChange = (e) => {
    if (e.value == "pieChart") {
      setState({ ...state, maxNumberBasedOnChart: 2 });
    }
    if (e.value == "barChart") {
      setState({ ...state, maxNumberBasedOnChart: 2 });
    }
    if (e.value == "lineChart") {
      setState({ ...state, maxNumberBasedOnChart: 3 });
    }
  };

  const handleSubmit = () => {
    setState({ ...state, showChart: true });
    return toast.success(
      <SuccessToastChart message={"Charts generated Successfully !"} />,
      {
        icon: false,
        hideProgressBar: true,
        transition: Zoom,
      }
    );
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xxl={6} xl={6} xs={6}>
              <Label>Upload Csv Data</Label>
              <Input type="file" accept=".csv" onChange={handleFileUpload} />
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col xxl={6} xl={6} xs={4}>
              <Button color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
          {state.csvParsedData &&
          state.csvParsedData.length > 0 &&
          state.showChart ? (
            <>
              {" "}
              <Row style={{ marginTop: "20px" }}>
                <Col xxl={6} xl={6} xs={4}>
                  <PieChart data={state.csvParsedData} />
                </Col>{" "}
                <Col xxl={6} xl={6} xs={4}>
                  {/* <SimpleBarChart /> */}
                  <SimpleBarChart data={state.csvParsedData} />
                </Col>
              </Row>
            </>
          ) : (
            <></>
          )}{" "}
        </CardBody>
      </Card>
    </div>
  );
};

export default ReportPage;

// return state.activityByGroupData ? (
//   <div>
//     <Card>
//       <CardHeader>
//         <CardTitle>Reports</CardTitle>
//       </CardHeader>
//       <CardBody>
//         <Row>
//           <Col xxl={6} xl={6} xs={4}>
//             <DonutChart
//               chartData={state.activityByGroupData}
//               greyColor={greyColor}
//               labelColor={labelColor}
//               yellowColor={yellowColor}
//               primary={colors.primary.main}
//               infoColorShade={infoColorShade}
//               warningColorShade={warningColorShade}
//               successColorShade={successColorShade}
//             />
//           </Col>
//           <Col xxl={6} xl={6} xs={4}>
//             <ApexLineChart
//               chartData={state.activityByPeriodByScope2}
//               direction={"ltr"}
//               warning={colors.warning.main}
//             />
//             {/* <LineChart warning={colors.warning.main} /> */}
//           </Col>
//         </Row>
//       </CardBody>
//     </Card>
//   </div>
// ) : (
//   <></>
// );
// };
