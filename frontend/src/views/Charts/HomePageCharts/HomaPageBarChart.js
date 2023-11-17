// ** Third Party Components
import Chart from "react-apexcharts";
import Flatpickr from "react-flatpickr";
import { Calendar } from "react-feather";
import axios from "axios";
// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";

import ActivityByDataType2 from "../../../csvData/ActivityByDataType2.csv";
import { useEffect } from "react";
import { readString } from "react-papaparse";

const HomePageBarChart = ({ info, direction }) => {
  // ** Chart Options

  let barData = [];
  let labelArray = [];
  let valueArray = [];

  function file1() {
    try {
      readString(ActivityByDataType2, {
        // worker: true,
        download: true,
        header: true,
        // config: {
        //   delimiter: ",",
        // },
        complete: (results) => {
          console.log(results);
          axios
            .post("http://localhost:8000/posts", {
              name: "Activity By datatype 2",
              data: results.data,
            })
            .then((response) => console.log(response));
          barData = results.data;
          barData.map((obj) => {
            console.log("====================================");
            console.log(obj);
            labelArray.push(obj["Measures"]);
            valueArray.push(Number(obj["Proportion (%)"]));
            // console.log("====================================");
          });
          // setState({ ...state, activityByGroupData: results.data });
        },
      });
    } catch (error) {}
  }

  file1();

  useEffect(() => {
    window.dispatchEvent(new Event("resize")); // ** Chart Options
  }, []);

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "30%",
        borderRadius: [10],
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: "#ffe700",
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: labelArray,
    },
    yaxis: {
      opposite: direction === "rtl",
    },
  };

  console.log("====================================");
  console.log("value", valueArray);
  console.log("====================================");
  // ** Chart Series
  const series = [
    {
      data: valueArray,
    },
  ];

  return (
    <Card>
      <CardHeader className="d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start">
        <div>
          <CardSubtitle className="text-muted mb-25"></CardSubtitle>
          <CardTitle className="fw-bolder" tag="h4">
            Co2 Emission by Measures
          </CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="bar" height={400} />
      </CardBody>
    </Card>
  );
};

export default HomePageBarChart;
