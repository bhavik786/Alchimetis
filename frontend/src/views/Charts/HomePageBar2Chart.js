// ** Third Party Components
import { Bar } from "react-chartjs-2";
import Flatpickr from "react-flatpickr";
import { Calendar } from "react-feather";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

const HomePageBar2Chart = () => {
  // ** Chart Options

  const labelColor = "#6e6b7b";
  const tooltipShadow = "rgba(0, 0, 0, 0.25)";
  const gridLineColor = "rgba(200, 200, 200, 0.2)";
  const lineChartPrimary = "#666ee8";
  const lineChartDanger = "#ff4961";
  const warningColorShade = "#ffbd1f";
  const warningLightColor = "#FDAC34";
  const successColorShade = "#28dac6";
  const primaryColorShade = "#836AF9";
  const infoColorShade = "#299AFF";
  const yellowColor = "#ffe800";
  const greyColor = "#4F5D70";
  const blueColor = "#2c9aff";
  const blueLightColor = "#84D0FF";
  const greyLightColor = "#EDF1F4";
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    scales: {
      x: {
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: { color: labelColor },
      },
      y: {
        min: 0,
        max: 400,
        grid: {
          color: gridLineColor,
          borderColor: gridLineColor,
        },
        ticks: {
          stepSize: 100,
          color: labelColor,
        },
      },
    },
    plugins: {
      legend: { display: false },
    },
  };

  // ** Chart data
  const data = {
    labels: [
      "7/12",
      "8/12",
      "9/12",
      "10/12",
      "11/12",
      "12/12",
      "13/12",
      "14/12",
      "15/12",
      "16/12",
      "17/12",
      "18/12",
      "19/12",
    ],
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: successColorShade,
        borderColor: "transparent",
        borderRadius: { topRight: 15, topLeft: 15 },
        data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle tag="h4">Emission by dates </CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ height: "400px" }}>
          <Bar data={data} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  );
};

export default HomePageBar2Chart;
