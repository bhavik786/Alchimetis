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
  Button,
} from "reactstrap";
import ReportTypesPage from "./ReportTypesList";
import ReportsCard from "../../Components/ActionPage/ReportsCard";
import StatsHorizontal from "../../@core/components/widgets/stats/StatsHorizontal";
import { Cpu } from "react-feather";
import { useHistory } from "react-router-dom";

import { useReactToPrint } from "react-to-print";

import EmissionReportPage from "./EmissionReportPage";
import { useRef } from "react";
import { useComponentPDF } from "component-pdf";
const GriFrameWorkPage = () => {
  const history = useHistory();
  const handleReportClick = (url) => {
    history.push(`/${url}`);
  };
  const { loading, download } = useComponentPDF("pdf");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const funcDownload = () => {
    setTimeout(3000);
    download();
  };
  return (
    <div>
      <Row>
        <div>
          <text style={{ fontSize: "20px" }}>Reports</text>
        </div>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        {/* Stats With Icons Horizontal */}
        <Col
          lg="4"
          sm="6"
          onClick={() => handleReportClick("sustainabilityPage")}
        >
          <ReportsCard name={"Sustainability Reports"} />
        </Col>{" "}
        <Col
          lg="4"
          sm="6"
          // onClick={() => handleReportClick("utilityAccountPage")}
          onClick={() => handleReportClick("sustainabilityPage")}
        >
          <ReportsCard name={"Utility Account Analytics"} />
        </Col>{" "}
        <Col
          lg="4"
          sm="6"
          // onClick={() => handleReportClick("csrReportPage")}
          onClick={() => handleReportClick("sustainabilityPage")}
        >
          <ReportsCard name={"CSR Reports"} />
        </Col>
      </Row>{" "}
      {/* <Button color="primary" onClick={funcDownload}>
        Download Report
      </Button>
      <div id="pdf">
        <Row style={{ padding: "25px" }}>
          <Label>
            <b>View Emission Report</b>
          </Label>
          <EmissionReportPage forReport={true} />
        </Row>
      </div> */}
    </div>
  );
};

export default GriFrameWorkPage;
