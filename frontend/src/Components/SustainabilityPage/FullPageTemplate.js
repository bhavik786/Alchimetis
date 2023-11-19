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
import {
  Row,
  Col,
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
} from "reactstrap";
// import SustainabilityCard from "../../Components/ActionPage/SustainabilityCard";
// import SustainabilityReportCard from "../../Components/ActionPage/SustainabilityReportCard";
import Chart from "react-apexcharts";
import StatsCard from "./StatsCard";
import LeftSideCard from "./LeftSideCard";

const FullPageTemplate = ({ passData }) => {
  const history = useHistory();

  const {
    mainTitle,
    icon,
    cardData,
    pieChartData,
    donutChartData,
    barChartData,
    barChartWithLineData,
  } = passData;
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
            mainTitle={mainTitle}
            icon={icon}
            cardData={cardData}
            optionsForDonut={donutChartData.optionsForDonut}
            seriesForDonut={donutChartData.seriesForDonut}
          />
        </Col>{" "}
        <Col xl={8} md={8}>
          <Row>
            <Col xl={6} md={6}>
              {" "}
              <Card>
                <CardHeader>
                  <b>{pieChartData.title}</b>
                </CardHeader>
                <CardBody>
                  <Chart
                    options={pieChartData.optionsForPie}
                    series={pieChartData.seriesForPie}
                    type="pie"
                  />
                </CardBody>
              </Card>
            </Col>{" "}
            <Col xl={6} md={6}>
              {" "}
              <Card>
                <CardHeader>
                  <b>{barChartData.title}</b>
                </CardHeader>
                <CardBody>
                  <Chart
                    options={barChartData.optionsForBar}
                    series={barChartData.seriesForBar}
                    type="bar"
                  />
                </CardBody>
              </Card>
            </Col>{" "}
            <Col xl={12} md={12}>
              {" "}
              <Card>
                <CardHeader>
                  <b>{barChartWithLineData.title}</b>
                </CardHeader>
                <CardBody>
                  <Chart
                    options={barChartWithLineData.optionsForBarWithLine}
                    series={barChartWithLineData.seriesForBarWithLine}
                    type="line"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default FullPageTemplate;
