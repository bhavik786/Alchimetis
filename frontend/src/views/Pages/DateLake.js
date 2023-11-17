/* eslint-disable */
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
} from "reactstrap";
import RepeatBlock from "../../Components/RepeatBlock";

const DataLakePage = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Welcome ...</CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Welcome to DateLake Page</CardText>
        </CardBody>
        <RepeatBlock />{" "}
      </Card>
    </div>
  );
};

export default DataLakePage;
