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

const SustainabilityReportPage = () => {
  const history = useHistory();
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
        {/* <Col xl={4} md={4}>
          <div> Sustainability - Executive Report</div>
        </Col> */}
        <Col xl={12} md={12}>
          <Row>
            <Col xl={4} md={4}>
              {" "}
              <SustainabilityReportCard
                data={{
                  current: "111.48K",
                  previous: "115.30K",
                  variance: "-3.3 %",
                }}
                buttonText={"View Emission"}
                title={"Emissions (t of CO2e"}
                buttonLink={"/viewEmissionReportPage"}
                icon={<Truck size={25} />}
              />
            </Col>
            <Col xl={4} md={4}>
              {" "}
              <SustainabilityReportCard
                buttonText={"View Energy"}
                buttonLink={"/viewEmissionReportPage"}
                data={{
                  current: "1.28M",
                  previous: "1.31M",
                  variance: "-2.6 %",
                }}
                title={"Energy (GJ)"}
                icon={<Zap size={25} />}
              />
            </Col>
            <Col xl={4} md={4}>
              {" "}
              <SustainabilityReportCard
                buttonText={"View Waste"}
                buttonLink={"/viewEmissionReportPage"}
                title={"Waste (t)"}
                data={{
                  current: "2.55K",
                  previous: "2.89K",
                  variance: "-11.8 %",
                }}
                icon={<Trash2 size={25} />}
              />
            </Col>{" "}
            <Col xl={4} md={4}>
              {" "}
              <SustainabilityReportCard
                buttonText={"View Water"}
                buttonLink={"/viewEmissionReportPage"}
                title={"Water (L)"}
                data={{
                  current: "633.34",
                  previous: "698.98",
                  variance: "-0.8 %",
                }}
                icon={<Droplet size={25} />}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default SustainabilityReportPage;
