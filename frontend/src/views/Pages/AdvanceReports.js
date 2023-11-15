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
  Input,
  Button,
} from "reactstrap";
import DonutChart from "../Charts/DonutChart";

import { ThemeColors } from "@src/utility/context/ThemeColors";
import ChartjsBarChart from "../Charts/Barchart";
import { useContext, useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";

const fs = require("fs");

import activityByGroupData from "../Charts/ActivityByGroup.csv";
import activityByPeriodByScope2 from "../Charts/Activity by period by scope 2.csv";
import Select from "react-select";

import PieChart from "../Charts/PieChart";
const AdvanceReportPage = () => {
  const { readString } = usePapaParse();
  const { colors } = useContext(ThemeColors);
  const labelColor = "#6e6b7b";

  const [state, setState] = useState({
    activityByGroupData: [],
    activityByPeriodByScope2: [],
    uploadedFile: {},
    chartFieldsOptions: [],
    csvParsedData: [],
    selectedChartFieldsOptions: [],
    maxNumberBasedOnChart: 0,
  });

  useEffect(() => {
    convertOptions();
  }, [state.csvParsedData]);
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

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xxl={6} xl={6} xs={6}>
              <Label>Upload Csv Data</Label>
              <Input type="file" accept=".csv" onChange={handleFileUpload} />
            </Col>
            <Col xxl={6} xl={6} xs={4}>
              <Label>Select Chart Type</Label>
              <Select options={chartTypeOptions} onChange={handleChartChange} />
            </Col>
            <Col xxl={6} xl={6} xs={6}>
              <Label>Select Fields</Label>
              <Select
                options={state.chartFieldsOptions}
                isMulti
                onChange={(options) => {
                  setState({ ...state, selectedChartFieldsOptions: options });
                }}
                isOptionDisabled={() =>
                  state.selectedChartFieldsOptions.length >=
                  state.maxNumberBasedOnChart
                }
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col xxl={6} xl={6} xs={4}>
              <Button color="primary">Submit</Button>
            </Col>
          </Row>

          <Row style={{ marginTop: "20px" }}>
            <Col xxl={6} xl={6} xs={4}>
              <PieChart
                data={state.csvParsedData}
                selectedFieldForChart={state.selectedChartFieldsOptions}
              />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default AdvanceReportPage;
