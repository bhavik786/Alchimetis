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

import PieChart from "../Charts/SimpleReports/PieChart";
import { Zoom, toast } from "react-toastify";
import { SuccessToastChart } from "../../Toast";
import SimpleBarChart from "../Charts/SimpleReports/BarChart";
const ReportPage = () => {
  const { readString } = usePapaParse();
  const { colors } = useContext(ThemeColors);

  const [state, setState] = useState({
    activityByGroupData: [],
    activityByPeriodByScope2: [],
    uploadedFile: {},
    chartFieldsOptions: [],
    csvParsedData: [],
    selectedChartFieldsOptions: [],
    maxNumberBasedOnChart: 0,
    showChart: false,
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

  const handleSubmit = () => {
    setState({ ...state, showChart: true });
    return toast.success(
      <SuccessToastChart message={"Charts generated Successfully !"} />,
      {
        icon: false,
        hideProgressBar: true,
        transition: Zoom,
      }
    );
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
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col xxl={6} xl={6} xs={4}>
              <Button color="primary" onClick={handleSubmit}>
                Submit
              </Button>
            </Col>
          </Row>
          {state.csvParsedData &&
          state.csvParsedData.length > 0 &&
          state.showChart ? (
            <>
              {" "}
              <Row style={{ marginTop: "20px" }}>
                <Col xxl={6} xl={6} xs={4}>
                  <PieChart data={state.csvParsedData} />
                </Col>{" "}
                <Col xxl={6} xl={6} xs={4}>
                  <SimpleBarChart data={state.csvParsedData} />
                </Col>
              </Row>
            </>
          ) : (
            <></>
          )}{" "}
        </CardBody>
      </Card>
    </div>
  );
};

export default ReportPage;
