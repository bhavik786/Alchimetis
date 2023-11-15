import React from "react";
import {
  ArrowLeft,
  ChevronLeft,
  Droplet,
  Trash2,
  Truck,
  Zap,
} from "react-feather";
import { useHistory } from "react-router-dom";
import { Row, Col, Button, Card, CardHeader } from "reactstrap";
import SustainabilityCard from "../../Components/ActionPage/SustainabilityCard";
import SustainabilityReportCard from "../../Components/ActionPage/SustainabilityReportCard";
import Chart from "react-apexcharts";

const EmissionReportPage = () => {
  const history = useHistory();

  const series = [44, 55];
  const options = {
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
          <Card>
            <CardHeader>Card 1</CardHeader>
            <Chart
              options={options}
              series={series}
              type="donut"
              height={250}
            />
          </Card>
        </Col>{" "}
        <Col xl={8} md={8}>
          <Row>
            <Col xl={6} md={6}>
              {" "}
              <Card>
                <CardHeader>Card 2</CardHeader>
              </Card>
            </Col>{" "}
            <Col xl={6} md={6}>
              {" "}
              <Card>
                <CardHeader>Card 3</CardHeader>
              </Card>
            </Col>{" "}
            <Col xl={12} md={12}>
              {" "}
              <Card>
                <CardHeader>Card 3</CardHeader>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default EmissionReportPage;
