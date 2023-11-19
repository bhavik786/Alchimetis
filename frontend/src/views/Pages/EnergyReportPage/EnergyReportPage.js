import React from "react";
import {
  ArrowLeft,
  ChevronLeft,
  Droplet,
  LifeBuoy,
  Thermometer,
  Trash2,
  Truck,
  Wind,
  Zap,
} from "react-feather";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
} from "reactstrap";

import LeftSideCard from "../../../Components/SustainabilityPage/LeftSideCard";
import LeftTopCard from "../../../Components/SustainabilityPage/LeftTopCard";

const EnergyReportPage = () => {
  const history = useHistory();

  const seriesForDonut = [44, 55];
  const optionsForDonut = {
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
  };

  return (
    <>
      <Row>
        <Col xl={1} md={1} sm={1}>
          {" "}
          <Row>
            <Button color="primary" onClick={() => history.goBack()}>
              <ChevronLeft size={15} /> Back
            </Button>
          </Row>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col xl={4} md={4}>
          <LeftSideCard
            mainTitle="Energy (GJ)"
            icon={<Zap size={25} />}
            cardData={{
              card1: { title: "CONSUMPTION" },
              card2: { title: "EMISSIONS (T OF CO2E)" },
              card3: { title: "COST (ARS, AUD, CAD, CNY)" },
            }}
            seriesForDonut={seriesForDonut}
            optionsForDonut={optionsForDonut}
          />
        </Col>{" "}
        <Col xl={8} md={8}>
          <Row>
            <Col xl={6} md={6}>
              <LeftTopCard
                mainTitle="Electricity (GJ)"
                icon={<Zap size={25} />}
                seriesForDonut={seriesForDonut}
                optionsForDonut={optionsForDonut}
                buttonUrl={"/viewEnergyReportPage/viewElectricity"}
              />
            </Col>{" "}
            <Col xl={6} md={6}>
              {" "}
              <LeftTopCard
                mainTitle="Natural Gas (GJ)"
                icon={<Wind size={25} />}
                seriesForDonut={seriesForDonut}
                optionsForDonut={optionsForDonut}
                buttonUrl={"/viewEnergyReportPage/viewNaturalGas"}
              />
            </Col>{" "}
            <Col xl={6} md={6}>
              {" "}
              <LeftTopCard
                mainTitle="Stationary Fuels (GJ)"
                icon={<LifeBuoy size={25} />}
                seriesForDonut={seriesForDonut}
                optionsForDonut={optionsForDonut}
                buttonUrl={"/viewEnergyReportPage/viewStationaryFuel"}
              />
            </Col>{" "}
            <Col xl={6} md={6}>
              {" "}
              <LeftTopCard
                mainTitle="Districted Heating and Cooling (GJ)"
                icon={<Thermometer size={25} />}
                seriesForDonut={seriesForDonut}
                optionsForDonut={optionsForDonut}
                buttonUrl={"/viewEnergyReportPage/viewHeatingAndCooling"}
              />
            </Col>{" "}
            <Col xl={6} md={6}>
              {" "}
              <LeftTopCard
                mainTitle="Transport Fuels (GJ)"
                icon={<Truck size={25} />}
                seriesForDonut={seriesForDonut}
                optionsForDonut={optionsForDonut}
                buttonUrl={"/viewEnergyReportPage/viewTransportFuel"}
              />
            </Col>{" "}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default EnergyReportPage;
