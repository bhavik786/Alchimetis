import React from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Label,
  Row,
} from "reactstrap";
import Chart from "react-apexcharts";
import { useHistory } from "react-router-dom";
const LeftTopCard = ({
  mainTitle,
  icon,
  seriesForDonut,
  optionsForDonut,

  buttonUrl,
}) => {
  const history = useHistory();
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
      <Button color="primary" size="md" onClick={() => history.push(buttonUrl)}>
        View Report
      </Button>
    </Card>
  );
};

export default LeftTopCard;
