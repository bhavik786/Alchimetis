/* eslint-disable */
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Row,
  Col,
  Label,
} from "reactstrap";

import { ThemeColors } from "@src/utility/context/ThemeColors";
import ChartjsBarChart from "./Charts/Barchart";
import SimpleLineChart from "./Charts/NewLine";
import HomePagePieChart from "./Charts/HomePagePieChart";
import HomePageBarChart from "./Charts/HomaPageBarChart";
import HomePageBar2Chart from "./Charts/HomePageBar2Chart";

const Home = () => {
  return (
    <div>
      <Row className="match-height">
        <Col xl="4" md="6" xs="12">
          <Label
            style={{
              fontSize: "40px",
              fontWeight: "600",
              color: "#2D55B4",
              lineHeight: "60px",
            }}
          >
            Dashboard
          </Label>
        </Col>
      </Row>
      <Row className="match-height">
        <Col xl="4" md="6" xs="12">
          <Label
            style={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#2D55B4",
              lineHeight: "24px",
            }}
          >
            {" "}
            Welcome Back{" "}
          </Label>
        </Col>
      </Row>
      <Row className="match-height" style={{ marginTop: "20px" }}>
        <Col xl="4" md="6" xs="12">
          <Card>
            <CardHeader></CardHeader>
            <Col xl="12" sm="12">
              <HomePageBar2Chart />
            </Col>
          </Card>
        </Col>

        <Col xl="4" md="6" xs="12">
          <Card>
            <CardHeader></CardHeader>
            <Col xl="12" sm="12">
              <HomePageBarChart direction={"ltr"} />
            </Col>
          </Card>
        </Col>
        <Col xl="4" md="6" xs="12">
          <Card>
            <CardHeader></CardHeader>
            <Col xl="12" sm="12">
              <HomePagePieChart />
            </Col>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
