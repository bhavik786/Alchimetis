// ** Third Party Components
import Chart from "react-apexcharts";
import { Calendar } from "react-feather";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";
import { detectLabelField, detectValueField } from "../../../Utils/UtilFunc";

const SimpleBarChart = ({ info, direction, data }) => {
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
          console.log("====================================");
          console.log({ labelField: labelField, valueField: valueField });
          console.log("====================================");
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
    colors: info,
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
          <CardSubtitle className="text-muted mb-25">Bar Chart</CardSubtitle>
          <CardTitle className="fw-bolder" tag="h4"></CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="bar" height={400} />
      </CardBody>
    </Card>
  );
};

export default SimpleBarChart;
