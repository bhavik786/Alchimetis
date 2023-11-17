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
import DonutChart from "../Charts/DonutChart";
import Repeater from "@components/repeater";
import { ThemeColors } from "@src/utility/context/ThemeColors";
import ChartjsBarChart from "../Charts/Barchart";
import { useContext, useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";

const fs = require("fs");

import activityByGroupData from "../Charts/ActivityByGroup.csv";
import activityByPeriodByScope2 from "../Charts/Activity by period by scope 2.csv";
import Select from "react-select";

// import PieChart from "../Charts/PieChart";
import PieChartBlock from "../Charts/PieChart";
import { Plus, X } from "react-feather";
const Block = () => {
  const { readString } = usePapaParse();
  const { colors } = useContext(ThemeColors);
  const labelColor = "#6e6b7b";

  //   const [state, setState] = useState({
  //     activityByGroupData: [],
  //     activityByPeriodByScope2: [],
  //     uploadedFile: {},
  //     chartFieldsOptions: [],
  //     csvParsedData: [],
  //     selectedChartFieldsOptions: [],
  //     maxNumberBasedOnChart: 0,
  //   });

  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState([]);

  const increaseCount = () => {
    setCount(count + 1);
  };

  //   useEffect(() => {
  //     convertOptions();
  //   }, [state.csvParsedData]);
  const chartTypeOptions = [
    { label: "Pie Chart", value: "pieChart" },
    { label: "Bar Chart", value: "barChart" },
    { label: "Line Chart", value: "lineChart" },
  ];

  const convertOptions = () => {
    state.csvParsedData &&
      state.csvParsedData.map((data, index) => {
        if (index == 0) {
          let keysArray = Object.keys(data);
          let fieldOptionsArray = keysArray.map((key) => ({
            label: key,
            value: key,
          }));
          setState({ ...state, chartFieldsOptions: fieldOptionsArray });
        }
      });
  };

  const handleFileUpload = (e) => {
    setState({ ...state, uploadedFile: e.target.files[0] });
    readString(e.target.files[0], {
      download: true,
      header: true,

      complete: (results) => {
        setState({ ...state, csvParsedData: results && results.data });
      },
    });
  };

  const handleChartChange = (e) => {
    if (e.value == "pieChart") {
      setState({ ...state, maxNumberBasedOnChart: 2 });
    }
    if (e.value == "barChart") {
      setState({ ...state, maxNumberBasedOnChart: 2 });
    }
    if (e.value == "lineChart") {
      setState({ ...state, maxNumberBasedOnChart: 3 });
    }
  };

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
      <Row>
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

      <Repeater count={count}>
        {(i) => (
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
                  <Label for={`upload-csv-data-${i}`}>Upload Csv Data</Label>
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
                    onChange={(e) => handleInputChange(i, "chartType", e.value)}
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
                    <PieChartBlock
                      data={formData[i].csvFile}
                      selectedFieldForChart={{
                        label: formData[i].selectLabel,
                        value: formData[i].selectValue,
                      }}
                    />
                  ) : (
                    ""
                  )}

                  {formData &&
                  formData[i] &&
                  formData[i].chartType == "barChart" &&
                  formData[i].selectLabel &&
                  formData[i].selectValue
                    ? "bar chart"
                    : ""}

                  {formData &&
                  formData[i] &&
                  formData[i].chartType == "lineChart" &&
                  formData[i].selectLabel &&
                  formData[i].selectValue
                    ? "line chart"
                    : ""}
                </Col>
              </Row>
            </CardBody>
          </Card>
        )}
      </Repeater>
    </div>
  );
};

export default Block;
