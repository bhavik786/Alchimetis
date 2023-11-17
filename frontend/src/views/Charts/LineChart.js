/* eslint-disable */
// ** Third Party Components
import Chart from "react-apexcharts";
import { ArrowDown } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
  Badge,
} from "reactstrap";

const ApexLineChart = ({ direction, warning, data, selectedFieldForChart }) => {
  // ** Chart Options

  let labelArray = [];
  let valueArray = [];
  const setDataBasedOnOptions = () => {
    data &&
      data.map((field) => {
        const label = field[`${selectedFieldForChart.label}`];
        labelArray.push(label);

        const value = field[`${selectedFieldForChart.value}`];
        valueArray.push(Number(value));
      });
  };

  setDataBasedOnOptions();
  const options = {
    chart: {
      zoom: {
        enabled: false,
      },
      parentHeightOffset: 0,
      toolbar: {
        show: false,
      },
    },

    markers: {
      strokeWidth: 7,
      strokeOpacity: 1,
      strokeColors: ["#fff"],
      colors: [warning],
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    colors: [warning],
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      custom(data) {
        return `<div class='px-1 py-50'>
              <span>${
                data.series[data.seriesIndex][data.dataPointIndex]
              }%</span>
            </div>`;
      },
    },
    xaxis: {
      categories: labelArray,
    },
    yaxis: {
      opposite: direction === "rtl",
    },
  };

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
          <CardTitle className="mb-75" tag="h4"></CardTitle>
          <CardSubtitle className="text-muted"></CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="line" height={400} />
      </CardBody>
    </Card>
  );
};

export default ApexLineChart;
