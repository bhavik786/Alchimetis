/* eslint-disable */

import FullPageTemplate from "../../../Components/SustainabilityPage/FullPageTemplate";
import { Trash, Truck, Zap } from "react-feather";

const ElectricityPage = () => {
  let passData = {
    mainTitle: "Transport Fuels (GJ)",
    icon: <Truck size={25} />,
    cardData: {
      card1: { title: "CONSUMPTION" },
      card2: { title: "EMISSIONS (T OF CO2E)" },
      card3: { title: "COST (USD)" },
    },
    donutChartData: {
      seriesForDonut: [60, 40],
      optionsForDonut: {
        chart: {
          type: "donut",
        },
        legend: {
          show: false,
          position: "bottom",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 90,
            offsetY: 10,
            donut: {
              labels: { show: false },
            },
          },
        },

        grid: {
          padding: {
            bottom: -80,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    },
    pieChartData: {
      title: "Data Types",
      optionsForPie: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Diesel Transport"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      seriesForPie: [44],
    },
    barChartData: {
      title: "Locations",
      seriesForBar: [
        // Rename 'x' to 'data'
        {
          name: "Transport Fuel",
          data: [44, 55, 41, 45, 52],
        },
      ],
      optionsForBar: {
        chart: {
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              total: {
                enabled: false,
                offsetX: 0,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },

        xaxis: {
          categories: ["Banff", "Toronto", "Redmond", "Wayne", "Royal Oak"],
          labels: {
            enabled: false,
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        yaxis: {
          // title: {
          //   text: undefined,
          // },
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + "K";
            },
          },
        },
        fill: {
          opacity: 1,
        },
        legend: {
          position: "top",
          horizontalAlign: "left",
          offsetX: 40,
        },
      },
    },
    barChartWithLineData: {
      title: "Month by Month",
      seriesForBarWithLine: [
        {
          name: "Volume",
          type: "column",
          data: [440, 505, 244, 271, 227, 113, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "Volume PY",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
        },
      ],
      optionsForBarWithLine: {
        chart: {
          // height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
        },
        stroke: {
          width: [0, 4],
        },

        dataLabels: {
          enabled: false,
          enabledOnSeries: [1],
        },
        labels: [
          "01 Jan 2001",
          "02 Jan 2001",
          "03 Jan 2001",
          "04 Jan 2001",
          "05 Jan 2001",
          "06 Jan 2001",
          "07 Jan 2001",
          "08 Jan 2001",
          "09 Jan 2001",
          "10 Jan 2001",
          "11 Jan 2001",
          "12 Jan 2001",
        ],

        xaxis: {
          type: "datetime",
        },
        yaxis: [
          {
            title: {
              // text: "Website Blog",
            },
          },
          {
            opposite: true,
            title: {
              // text: "Social Media",
            },
          },
        ],
      },
    },
  };
  return (
    <div>
      <FullPageTemplate passData={passData} />
    </div>
  );
};

export default ElectricityPage;
