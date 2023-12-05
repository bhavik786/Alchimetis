import React from "react";
import { Truck } from "react-feather";
import { useHistory } from "react-router-dom";

import FullPageTemplate from "../../Components/SustainabilityPage/FullPageTemplate";

const EmissionReportPage = ({ forReport }) => {
  const history = useHistory();

  let passData = {
    mainTitle: "Emissions (t of CO2e )",
    icon: <Truck size={25} />,
    cardData: {
      card1: { title: "SCOPE 1" },
      card2: { title: "SCOPE 2" },
      card3: { title: "SCOPE 3" },
    },
    donutChartData: {
      seriesForDonut: [44, 55],
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
        labels: [
          "Electricity",
          "Natural Gas",
          "Refrigerant - HFC",
          "Refrigerant - R22",
          "Steam",
          "Diesel Transport",
        ],
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
      seriesForPie: [44, 55, 13, 43, 22, 20],
    },
    barChartData: {
      title: "Locations",
      seriesForBar: [
        // Rename 'x' to 'data'
        {
          name: "Scope 1",
          data: [44, 55, 41, 55, 12, 47],
        },
        {
          name: "Scope 2",
          data: [53, 32, 33, 41, 86, 10],
        },
        {
          name: "Scope 3",
          data: [12, 17, 11, 18, 52, 85],
        },
      ],
      optionsForBar: {
        chart: {
          // type: "bar",
          // height: 350,
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
          categories: [
            "Banff",
            "Toronto",
            "Redmond",
            "Wayne",
            "Royal Oak",
            "Taylor",
          ], // Adjust the length based on your data
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
          name: "Emissions",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
        },
        {
          name: "C02",
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
  return <FullPageTemplate passData={passData} forReport={forReport} />;
};

export default EmissionReportPage;
