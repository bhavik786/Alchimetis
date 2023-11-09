/* eslint-disable */
// ** Third Party Components
import Chart from "react-apexcharts";
import { readString } from "react-papaparse";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";

import activityByGroupData from "../../csvData/ActivityByGroup.csv";
import { useEffect } from "react";

const ApexRadiarChart = () => {
  const donutColors = {
    series1: "#ffe700",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    series5: "#FFA1A1",
  };

  let pieData = [];
  let labelArray = [];
  let valueArray = [];

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
          pieData = results.data;
          pieData.map((obj) => {
            labelArray.push(obj["Groups"]);
            valueArray.push(parseFloat(obj["CO2e  (t)"]));
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
    legend: {
      show: true,
      position: "bottom",
    },
    labels: labelArray,

    colors: [
      donutColors.series1,
      donutColors.series5,
      donutColors.series3,
      donutColors.series2,
    ],
    dataLabels: {
      enabled: true,
      formatter(val) {
        return `${parseInt(val)}%`;
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: false,
            name: {
              fontSize: "2rem",
              fontFamily: "Montserrat",
            },
            value: {
              fontSize: "1rem",
              fontFamily: "Montserrat",
              formatter(val) {
                return `${parseInt(val)}%`;
              },
            },
            total: {
              show: true,
              fontSize: "1.5rem",
              label: "Operational",
              formatter() {
                return "31%";
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "1.5rem",
                  },
                  value: {
                    fontSize: "1rem",
                  },
                  total: {
                    fontSize: "1.5rem",
                  },
                },
              },
            },
          },
        },
      },
    ],
  };

  // ** Chart Series
  const series = valueArray;

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle className="mb-75" tag="h4">
            Co2 Emission by Region (2022-2023)
          </CardTitle>
          <CardSubtitle className="text-muted"></CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="donut" height={350} />
      </CardBody>
    </Card>
  );
};

export default ApexRadiarChart;
