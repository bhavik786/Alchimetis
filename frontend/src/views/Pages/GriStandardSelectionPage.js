// ** React Imports
import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft } from "react-feather";

// ** Reactstrap Imports
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Form,
  Input,
  Label,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useHistory } from "react-router-dom";
const GriStandardSelectionPage = () => {
  // ** State

  const history = useHistory();
  const [open, setOpen] = useState("1");

  const toggle = (id) => {
    open === id ? setOpen() : setOpen(id);
  };

  const CheckBoxComp = ({ checked, LabelText }) => {
    return (
      <>
        <div className="form-check form-check-inline">
          <Input
            type="checkbox"
            defaultChecked={checked}
            id="basic-cb-checked"
          />
          <Label for="basic-cb-checked" className="form-check-label">
            {LabelText}
          </Label>
        </div>
      </>
    );
  };
  const backClicked = () => {
    history.goBack();
  };
  const nextClicked = () => {
    history.push("/griFrameworkPage");
  };

  //   const CheckBoxCreate = ({ start, end, checked }) => {
  //     for (let i = start; i <= end; i++) {
  //       console.log("====================================");
  //       return console.log("i");
  //       console.log("====================================");
  //       <div className="form-check form-check-inline">
  //         <Input type="checkbox" defaultChecked={checked} id="basic-cb-checked" />
  //         <Label for="basic-cb-checked" className="form-check-label">
  //           GRI + " " +i
  //         </Label>
  //       </div>;
  //     }
  //   };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Select GRI Standards</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="1">
                    <b> Universal Standards</b>
                  </AccordionHeader>
                  <AccordionBody accordionId="1">
                    <Row>
                      <Col>
                        <div className="demo-inline-spacing">
                          <CheckBoxComp checked={true} LabelText={"GRI 1"} />
                          <CheckBoxComp checked={true} LabelText={"GRI 2"} />
                          <CheckBoxComp checked={true} LabelText={"GRI 3"} />
                        </div>
                      </Col>
                    </Row>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="2">
                    <b>Sector Standards</b>
                  </AccordionHeader>
                  <AccordionBody accordionId="2">
                    <CheckBoxComp checked={false} LabelText={"GRI 11"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 12"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 13"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 14"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 15"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 16"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 17"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 18"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 19"} />
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="3">
                    <b>Topic Standards</b>
                  </AccordionHeader>
                  <AccordionBody accordionId="3">
                    <CheckBoxComp checked={false} LabelText={"GRI 201"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 304"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 305"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 415"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 205"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 416"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 205"} />
                    <CheckBoxComp checked={false} LabelText={"GRI 208"} />
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </>
            <Row>
              <Col xl={10} md={10} sm={10}>
                <Button
                  style={{ marginTop: "20px" }}
                  color="primary"
                  onClick={backClicked}
                >
                  <ChevronLeft style={{ marginRight: "15px" }} size={15} />
                  Back
                </Button>
              </Col>
              <Col>
                {" "}
                <Button
                  style={{ marginTop: "20px" }}
                  color="primary"
                  onClick={nextClicked}
                >
                  Next
                  <ChevronRight style={{ marginLeft: "15px" }} size={15} />
                </Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};

export default GriStandardSelectionPage;

{
  /* <Accordion open={open} toggle={toggle}>
<AccordionItem>
  <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
  <AccordionBody accordionId="1">
    <strong>This is the first item's accordion body.</strong> You can
    modify any of this with custom CSS or overriding our default
    variables. It's also worth noting that just about any HTML can go
    within the <code>&lt;AccordionBody&gt;</code>, though the transition
    does limit overflow.
  </AccordionBody>
</AccordionItem>
<AccordionItem>
  <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
  <AccordionBody accordionId="2">
    <strong>This is the second item's accordion body.</strong> You can
    modify any of this with custom CSS or overriding our default
    variables. It's also worth noting that just about any HTML can go
    within the <code>&lt;AccordionBody&gt;</code>, though the transition
    does limit overflow.
  </AccordionBody>
</AccordionItem>
<AccordionItem>
  <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
  <AccordionBody accordionId="3">
    <strong>This is the third item's accordion body.</strong> You can
    modify any of this with custom CSS or overriding our default
    variables. It's also worth noting that just about any HTML can go
    within the <code>&lt;AccordionBody&gt;</code>, though the transition
    does limit overflow.
  </AccordionBody>
</AccordionItem>
</Accordion> */
}
