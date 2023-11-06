// ** Third Party Components
import { useEffect } from "react";
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

const ApexLineChart = ({ direction, warning, chartData }) => {
  // ** Chart Options
  let scope1 = [];
  let scope2 = [];
  let scope3 = [];
  let dateData = [];
  useEffect(() => {
    chartData &&
      chartData.map((data) => {
        if (data) {
          data && scope1.push(data["Scope 1"]);
          data && scope2.push(data["Scope 2"]);
          data && scope3.push(data["Scope 3"]);
          data && dateData.push(data["Date"]);
        }
      });
  }, [chartData]);
  const lineColors = {
    line1: "#2196F3",
    line2: "#1976D2",
    line3: "#1565C0",
  };
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
    colors: [lineColors.line3, lineColors.line1, lineColors.line2],

    xaxis: {
      categories: dateData,
    },
    yaxis: {
      opposite: direction === "rtl",
    },
  };

  // ** Chart Series
  const series = [
    {
      name: "Scope 1",
      data: scope1,
    },
    {
      name: "Scope 2",
      data: scope2,
    },
    {
      name: "Scope 3",
      data: scope3,
    },
  ];

  return (
    <Card>
      <CardHeader className="d-flex flex-sm-row flex-column justify-content-md-between align-items-start justify-content-start">
        <div>
          <CardTitle className="mb-75" tag="h4">
            Balance
          </CardTitle>
          <CardSubtitle className="text-muted">
            Commercial networks & enterprises
          </CardSubtitle>
        </div>
        <div className="d-flex align-items-center flex-wrap mt-sm-0 mt-1">
          <h5 className="fw-bolder mb-0 me-1">$ 100,000</h5>
          <Badge color="light-secondary">
            <ArrowDown size={13} className="text-danger" />
            <span className="align-middle ms-25">20%</span>
          </Badge>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="line" height={400} />
      </CardBody>
    </Card>
  );
};

export default ApexLineChart;
