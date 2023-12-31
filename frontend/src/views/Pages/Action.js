/* eslint-disable */
import { Fragment } from "react";
import { Zoom, toast } from "react-toastify";
import Avatar from "@components/avatar";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Form,
  Input,
  Label,
  Row,
  Col,
  Button,
} from "reactstrap";

import {
  Bell,
  Check,
  X,
  AlertTriangle,
  Info,
  ArrowDownRight,
  ArrowRight,
  ArrowRightCircle,
  ChevronLeft,
  ChevronRight,
} from "react-feather";
import { useState } from "react";
import { SuccessToast } from "../../Toast";
import { useHistory } from "react-router-dom";

const ActionPage = () => {
  const [state, setState] = useState({
    selectedFrameWork: "GRI",
  });
  const history = useHistory();
  const submitClicked = () => {
    // history.push("/griFrameworkPage");
    history.push("/griStandardSelectionPage");
  };

  const handleRadioButton = (e) => {
    const value = e.target.value;
    setState({ ...state, selectedFrameWork: value });
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Select Reporting Framework</CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <div>
            <div className="form-check" style={{ marginTop: "20px" }}>
              <Input
                type="radio"
                name="framework"
                value={"GRI"}
                checked={state.selectedFrameWork == "GRI"}
                onChange={handleRadioButton}
              />
              <Label className="form-check-label" for="ex1-active">
                GRI
              </Label>
            </div>

            <div className="form-check" style={{ marginTop: "20px" }}>
              <Input
                type="radio"
                name="framework"
                value={"TCFD"}
                checked={state.selectedFrameWork == "TCFD"}
                onChange={handleRadioButton}
              />
              <Label className="form-check-label" for="ex1-inactive">
                TCFD
              </Label>
            </div>
            <div className="form-check" style={{ marginTop: "20px" }}>
              <Input
                type="radio"
                name="framework"
                value={"UN"}
                checked={state.selectedFrameWork == "UN"}
                onChange={handleRadioButton}
              />
              <Label className="form-check-label" for="ex1-active">
                UN
              </Label>
            </div>
            <div className="form-check" style={{ marginTop: "20px" }}>
              <Input
                type="radio"
                name="framework"
                value={"SASB"}
                checked={state.selectedFrameWork == "SASB"}
                onChange={handleRadioButton}
              />
              <Label className="form-check-label" for="ex1-inactive">
                SASB
              </Label>
            </div>
          </div>
          <Button
            style={{ marginTop: "20px" }}
            color="primary"
            onClick={submitClicked}
          >
            Next
            <ChevronRight style={{ marginLeft: "15px" }} size={15} />
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default ActionPage;
