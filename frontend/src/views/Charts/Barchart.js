// ** Third Party Components
import { Bar } from "react-chartjs-2";
// import Flatpickr from "react-flatpickr";
import { Calendar } from "react-feather";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

const ChartjsBarChart = ({
  success,
  gridLineColor,
  labelColor,
  data,
  selectedFieldForChart,
}) => {
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
  const data1 = {
    labels: labelArray,
    datasets: [
      {
        maxBarThickness: 15,
        backgroundColor: success,
        borderColor: "transparent",
        borderRadius: { topRight: 15, topLeft: 15 },
        data: valueArray,
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <CardTitle tag="h4">Latest Statistics</CardTitle>
        <div className="d-flex align-items-center">
          <Calendar size={14} />
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: "400px" }}>
          <Bar data={data1} options={options} height={400} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartjsBarChart;
