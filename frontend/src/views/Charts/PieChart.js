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

const ApexRadiarChart = ({ data, selectedFieldForChart }) => {
  const donutColors = {
    series1: "#ffe700",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    series5: "#FFA1A1",
  };

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
    // selectedFieldForChart &&
    //   selectedFieldForChart.map((options, index) => {
    //     data &&
    //       data.map((fields) => {
    //         if (index == 0) {
    //           console.log("====================================");
    //           console.log(fields[`${options}`]);
    //           console.log("====================================");
    //           const label = fields[`${options}`];
    //           labelArray.push(label);
    //         } else {
    //           const value = fields[`${options}`];
    //           valueArray.push(value);
    //         }
    //       });
    //   });
  };

  setDataBasedOnOptions();

  console.log({ labelArray, valueArray });

  // ** Chart Options
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
            Expense Ratio
          </CardTitle>
          <CardSubtitle className="text-muted">
            Spending on various categories
          </CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="donut" height={350} />
      </CardBody>
    </Card>
  );
};

export default ApexRadiarChart;
