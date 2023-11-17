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
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";
import Repeater from "@components/repeater";
import { ThemeColors } from "@src/utility/context/ThemeColors";
import { useContext, useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";

import Select from "react-select";

// import PieChart from "../Charts/PieChart";
import PieChartBlock from "../Charts/PieChart";
import BarChartBlock from "./../Charts/Barchart";
import { Plus, X } from "react-feather";
import LineChartBlock from "../Charts/LineChart";
import { handleDownload } from "../../Utils/UtilFunc/index";

import html2canvas from "html2canvas";

const Block = () => {
  const { readString } = usePapaParse();
  const { colors } = useContext(ThemeColors);
  const labelColor = "#6e6b7b";
  const gridLineColor = "#6e6b7b";
  const success = "#6e6b7b";

  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState([]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const chartTypeOptions = [
    { label: "Pie Chart", value: "pieChart" },
    { label: "Bar Chart", value: "barChart" },
    { label: "Line Chart", value: "lineChart" },
  ];

  const deleteForm = (index) => {
    setFormData((prevData) => {
      const newData = [...prevData];
      newData.splice(index, 1);
      return newData;
    });
    setCount(count - 1);
  };

  const handleInputChange = (index, field, value) => {
    console.log({ index, field, value });

    if (field == "csvFile") {
      console.log("in this");

      setFormData((prevData) => {
        const newData = [...prevData];
        newData[index] = {
          ...newData[index],
          field: [],
          submitClicked: "no",
        };
        return newData;
      });
      readString(value, {
        download: true,
        header: true,

        complete: (results) => {
          setFormData((prevData) => {
            const newData = [...prevData];
            newData[index] = { ...newData[index], [field]: results.data };
            return newData;
          });

          results.data.map((data, indexResult) => {
            if (indexResult == 0) {
              let keysArray = Object.keys(data);
              let fieldOptionsArray = keysArray.map((key) => ({
                label: key,
                value: key,
              }));
              let optionField = "field";
              setFormData((prevData) => {
                const newData = [...prevData];
                newData[index] = {
                  ...newData[index],
                  [optionField]: fieldOptionsArray,
                };
                return newData;
              });
            }
          });
        },
      });
    }
    setFormData((prevData) => {
      const newData = [...prevData];
      newData[index] = { ...newData[index], [field]: value };
      return newData;
    });
  };

  console.log(formData);

  return (
    <div>
      <Row style={{ marginBottom: "20px" }}>
        <Col xl={2} md={2}>
          <Button
            xl={2}
            className="btn-icon"
            color="primary"
            onClick={increaseCount}
          >
            <Plus size={14} />
            <span className="align-middle ms-25">Add New</span>
          </Button>
        </Col>
      </Row>

      <Row>
        <Repeater count={count}>
          {(i) => (
            <Row>
              <Col>
                <Card>
                  <CardBody>
                    <Row>
                      <Col md={12}>
                        <Button
                          color="danger"
                          className="text-nowrap px-1"
                          onClick={() => deleteForm(i)}
                          outline
                        >
                          <X size={14} className="me-50" />
                          <span>Delete</span>
                        </Button>
                      </Col>
                      <Col style={{ marginTop: "10px" }} xxl={6} xl={6} xs={6}>
                        <Label for={`upload-csv-data-${i}`}>
                          Upload Csv Data
                        </Label>
                        <Input
                          id={`upload-csv-data-${i}`}
                          type="file"
                          accept=".csv"
                          onChange={(e) =>
                            handleInputChange(i, "csvFile", e.target.files[0])
                          }
                        />
                      </Col>
                      <Col xxl={6} xl={6} xs={4}>
                        <Label for={`chart-type-${i}`}>Select Chart Type</Label>
                        <Select
                          id={`chart-type-${i}`}
                          options={chartTypeOptions}
                          onChange={(e) =>
                            handleInputChange(i, "chartType", e.value)
                          }
                        />
                      </Col>
                      <Col xxl={6} xl={6} xs={6}>
                        <Label for={`select-label-${i}`}>Select Label</Label>
                        <Select
                          id={`select-label-${i}`}
                          options={formData && formData[i] && formData[i].field}
                          onChange={(e) =>
                            handleInputChange(i, "selectLabel", e.value)
                          }
                        />
                      </Col>
                      <Col xxl={6} xl={6} xs={6}>
                        <Label for={`select-value-${i}`}>Select Value</Label>
                        <Select
                          id={`select-value-${i}`}
                          options={formData && formData[i] && formData[i].field}
                          onChange={(e) =>
                            handleInputChange(i, "selectValue", e.value)
                          }
                        />
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "20px" }}>
                      <Col xxl={6} xl={6} xs={4}>
                        <Button
                          color="primary"
                          onClick={(e) =>
                            handleInputChange(i, "submitClicked", "yes")
                          }
                          disabled={
                            formData &&
                            formData[i] &&
                            formData[i].chartType &&
                            formData[i].selectLabel &&
                            formData[i].selectValue
                              ? false
                              : true
                          }
                        >
                          Submit
                        </Button>
                      </Col>
                    </Row>

                    <Row style={{ marginTop: "20px" }}>
                      <Col xxl={6} xl={6} xs={4}>
                        {formData &&
                        formData[i] &&
                        formData[i].chartType == "pieChart" &&
                        formData[i].selectLabel &&
                        formData[i].selectValue &&
                        formData[i].submitClicked == "yes" ? (
                          <>
                            <div id={`chart-${i}`}>
                              <PieChartBlock
                                data={formData[i].csvFile}
                                selectedFieldForChart={{
                                  label: formData[i].selectLabel,
                                  value: formData[i].selectValue,
                                }}
                              />
                            </div>
                            <Col xl={2} md={2}>
                              <Button
                                color="primary"
                                onClick={() =>
                                  handleDownload(
                                    "png",
                                    "Pie_Report",
                                    `chart-${i}`
                                  )
                                }
                              >
                                Download
                              </Button>
                            </Col>{" "}
                          </>
                        ) : (
                          ""
                        )}

                        {formData &&
                        formData[i] &&
                        formData[i].chartType == "barChart" &&
                        formData[i].selectLabel &&
                        formData[i].selectValue &&
                        formData[i].submitClicked == "yes" ? (
                          <>
                            <div id={`chart-${i}`}>
                              <BarChartBlock
                                success={success}
                                gridLineColor={gridLineColor}
                                labelColor={labelColor}
                                data={formData[i].csvFile}
                                selectedFieldForChart={{
                                  label: formData[i].selectLabel,
                                  value: formData[i].selectValue,
                                }}
                              />
                            </div>{" "}
                            <Col xl={2} md={2}>
                              <Button
                                color="primary"
                                onClick={() =>
                                  handleDownload(
                                    "png",
                                    "Bar_Report",
                                    `chart-${i}`
                                  )
                                }
                              >
                                Download
                              </Button>
                            </Col>
                          </>
                        ) : (
                          ""
                        )}

                        {formData &&
                        formData[i] &&
                        formData[i].chartType == "lineChart" &&
                        formData[i].selectLabel &&
                        formData[i].selectValue &&
                        formData[i].submitClicked == "yes" ? (
                          <>
                            <div id={`chart-${i}`}>
                              <Col sm={12}>
                                <LineChartBlock
                                  data={formData[i].csvFile}
                                  selectedFieldForChart={{
                                    label: formData[i].selectLabel,
                                    value: formData[i].selectValue,
                                  }}
                                  warning={colors.warning.main}
                                />
                              </Col>
                            </div>

                            <Col xl={2} md={2}>
                              <Button
                                color="primary"
                                onClick={() =>
                                  handleDownload(
                                    "png",
                                    "Line_Report",
                                    `chart-${i}`
                                  )
                                }
                              >
                                Download
                              </Button>
                            </Col>
                          </>
                        ) : (
                          ""
                        )}
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          )}
        </Repeater>
      </Row>
    </div>
  );
};

export default Block;
