import React from "react";
import { Truck } from "react-feather";
import { Card, CardBody, CardHeader, Col, Label, Row } from "reactstrap";
import Chart from "react-apexcharts";
import StatsCard from "./StatsCard";

const LeftSideCard = ({
  mainTitle,
  icon,
  cardData,
  seriesForDonut,
  optionsForDonut,
}) => {
  return (
    <Card>
      <Row>
        <Col xl={2} md={2} style={{ padding: "20px" }}>
          <div className={`avatar avatar-stats p-50 m-0 ${"bg-light-primary"}`}>
            <div className="avatar-content"> {icon}</div>
          </div>
        </Col>{" "}
        <Col xl={10} md={10} style={{ padding: "10px" }}>
          <CardHeader>
            <b>{mainTitle}</b>{" "}
          </CardHeader>
        </Col>
      </Row>

      <Chart
        options={optionsForDonut}
        series={seriesForDonut}
        type="donut"
        height={250}
      />
      <Card>
        <CardHeader>
          <b>Performance</b>
        </CardHeader>
        <CardBody>
          <Row>
            <Label>
              <b>{cardData.card1.title}</b>
            </Label>
            <StatsCard
              cols={{ md: "3", sm: "3", xs: "12" }}
              data={{
                current: "111.48K",
                previous: "115.30K",
                variance: "-3.3 %",
              }}
            />
          </Row>
          <Row>
            <Label>
              <b>{cardData.card2.title}</b>
            </Label>
            <StatsCard
              cols={{ md: "3", sm: "3", xs: "12" }}
              data={{
                current: "111.48K",
                previous: "115.30K",
                variance: "-3.3 %",
              }}
            />
          </Row>{" "}
          <Row>
            <Label>
              <b>{cardData.card3.title}</b>
            </Label>
            <StatsCard
              cols={{ md: "3", sm: "3", xs: "12" }}
              data={{
                current: "111.48K",
                previous: "115.30K",
                variance: "-3.3 %",
              }}
            />
          </Row>
        </CardBody>
      </Card>
    </Card>
  );
};

export default LeftSideCard;
