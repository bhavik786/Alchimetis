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
} from "reactstrap";
import ReportsCard from "../../Components/ActionPage/ReportsCard";

const ReportTypesPage = () => {
  return (
    <div>
      <Row>
        <Col md={4} xl={4}>
          <ReportsCard name={"Sustainability"} />
        </Col>
      </Row>
    </div>
  );
};

export default ReportTypesPage;
