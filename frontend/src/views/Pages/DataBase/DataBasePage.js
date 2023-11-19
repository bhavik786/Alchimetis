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
  Input,
  Label,
  Button,
} from "reactstrap";
import FileUploaderMultiple from "../../../Components/DataBasePage/MultipleFileUpload";

const DataLakePage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Upload Csv Files</CardTitle>
        </CardHeader>
        <CardBody>
          <FileUploaderMultiple />
        </CardBody>
      </Card>
    </div>
  );
};

export default DataLakePage;
