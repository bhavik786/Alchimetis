// ** Third Party Components
import { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import { MoreVertical } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const ChartjsPolarAreaChart = (props) => {
  const {
    primary,
    greyColor,
    labelColor,
    yellowColor,
    infoColorShade,
    warningColorShade,
    successColorShade,
    chartData,
  } = props;

  let countryLabel = [];
  let proportion = [];
  useEffect(() => {
    chartData &&
      chartData.map((data) => {
        data && countryLabel.push(data.Groups);
        data && proportion.push(data["Proportion (%)"]);
      });
  }, [chartData]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    layout: {
      padding: {
        top: -5,
        bottom: -45,
      },
    },
    scales: {
      r: {
        grid: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: {
        position: "right",
        labels: {
          padding: 25,
          boxWidth: 9,
          color: labelColor,
          usePointStyle: true,
        },
      },
    },
  };

  // ** Chart Data
  const data = {
    labels: countryLabel,
    datasets: [
      {
        borderWidth: 0,
        label: "Population (millions)",
        data: proportion,
        backgroundColor: [
          primary,
          yellowColor,
          warningColorShade,
          infoColorShade,
          greyColor,
          successColorShade,
        ],
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle tag="h4">
          Contribution of each region to Co2 emission (2022 - 2023)
        </CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: "350px" }}>
          <PolarArea data={data} options={options} height={350} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartjsPolarAreaChart;
