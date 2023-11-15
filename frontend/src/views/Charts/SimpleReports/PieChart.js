// ** Third Party Components
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import { detectLabelField, detectValueField } from "../../../Utils/UtilFunc";

const SimplePieChart = ({ data }) => {
  const donutColors = {
    series1: "#ffe700",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    series5: "#FFA1A1",
  };

  let labelArray = [];
  let valueArray = [];

  const setDataFromCsv = () => {
    data &&
      data.map((obj, index) => {
        let labelField = "";
        let valueField = "";
        if (index == 0) {
          labelField = detectLabelField(data);
          valueField = detectValueField(data);

          const label = obj[`${labelField}`];
          labelArray.push(label);

          const value = parseFloat(obj[`${valueField}`]);
          valueArray.push(value);
        } else {
          labelField = detectLabelField(data);
          valueField = detectValueField(data);
          const label = obj[`${labelField}`];
          labelArray.push(label);

          const value = parseFloat(obj[`${valueField}`]);
          valueArray.push(value);
        }
      });
  };

  setDataFromCsv();

  // ** Chart Options
  const options = {
    legend: {
      show: true,
      position: "bottom",
    },
    labels: labelArray && labelArray,

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
  const series = valueArray && valueArray;

  return (
    <Card>
      <CardHeader>Pie Chart</CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="donut" height={350} />
      </CardBody>
    </Card>
  );
};

export default SimplePieChart;
