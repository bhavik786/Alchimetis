/* eslint-disable */
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import CsvFileListTable from "../../../Components/DataBasePage/CsvFileListTable";
const DataLakePage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardBody>
          <CsvFileListTable />
        </CardBody>
      </Card>
    </div>
  );
};

export default DataLakePage;
