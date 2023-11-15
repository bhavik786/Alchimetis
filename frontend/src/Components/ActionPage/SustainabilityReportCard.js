import React from "react";
import { Button, Card, CardHeader, Col, Row } from "reactstrap";
import SustainabilityCard from "./SustainabilityCard";
import { Truck } from "react-feather";
import { useHistory } from "react-router-dom";
const SustainabilityReportCard = ({
  buttonText,
  icon,
  title,
  data,
  buttonLink,
}) => {
  const history = useHistory();
  return (
    <>
      <Card style={{ borderRadius: "14px" }}>
        <Row>
          <Col xl={2} md={2} style={{ padding: "20px" }}>
            <div
              className={`avatar avatar-stats p-50 m-0 ${"bg-light-primary"}`}
            >
              <div className="avatar-content"> {icon}</div>
            </div>
          </Col>{" "}
          <Col xl={10} md={10} style={{ padding: "10px" }}>
            <CardHeader>{title} </CardHeader>
          </Col>
        </Row>
        <Row>
          <SustainabilityCard
            cols={{ md: "3", sm: "6", xs: "12" }}
            data={data}
          />
        </Row>
        <Row style={{ padding: "25px" }}>
          <Button color="primary" onClick={() => history.push(buttonLink)}>
            {buttonText}
          </Button>
        </Row>
      </Card>
    </>
  );
};

export default SustainabilityReportCard;
