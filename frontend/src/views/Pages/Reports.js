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
} from "reactstrap";
import DonutChart from "../Charts/DonutChart";

import { ThemeColors } from "@src/utility/context/ThemeColors";
import ChartjsBarChart from "../Charts/Barchart";
import { useContext, useEffect, useState } from "react";
import { usePapaParse } from "react-papaparse";

const fs = require("fs");

import activityByGroupData from "../Charts/ActivityByGroup.csv";
import activityByPeriodByScope2 from "../Charts/Activity by period by scope 2.csv";

import ApexLineChart from "../Charts/LineChart";
import LineChart from "../Charts/NewLine";
const ReportPage = () => {
  const { readString } = usePapaParse();
  const { colors } = useContext(ThemeColors);
  const labelColor = "#6e6b7b";

  const tooltipShadow = "rgba(0, 0, 0, 0.25)";
  const gridLineColor = "rgba(200, 200, 200, 0.2)";
  const lineChartPrimary = "#666ee8";
  const lineChartDanger = "#ff4961";
  const warningColorShade = "#ffbd1f";
  const warningLightColor = "#FDAC34";
  const successColorShade = "#28dac6";
  const primaryColorShade = "#836AF9";
  const yellowColor = "#ffe800";
  const greyColor = "#4F5D70";
  const infoColorShade = "#299AFF";
  const blueColor = "#2c9aff";
  const blueLightColor = "#84D0FF";
  const greyLightColor = "#EDF1F4";

  const [state, setState] = useState({
    activityByGroupData: [],
    activityByPeriodByScope2: [],
  });

  function file1() {
    try {
      readString(activityByGroupData, {
        // worker: true,
        download: true,
        header: true,
        // config: {
        //   delimiter: ",",
        // },
        complete: (results) => {
          console.log(results);

          setState({ ...state, activityByGroupData: results.data });
        },
      });
    } catch (error) {}
  }

  function file2() {
    try {
      readString(activityByPeriodByScope2, {
        download: true,
        header: true,

        complete: (results) => {
          console.log(results);

          setState({ ...state, activityByPeriodByScope2: results.data });
        },
      });
    } catch (error) {}
  }

  useEffect(async () => {
    file1();
    file2();
  }, []);

  return state.activityByGroupData ? (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Reports</CardTitle>
        </CardHeader>
        <CardBody>
          <Row>
            <Col xxl={6} xl={6} xs={4}>
              <DonutChart
                chartData={state.activityByGroupData}
                greyColor={greyColor}
                labelColor={labelColor}
                yellowColor={yellowColor}
                primary={colors.primary.main}
                infoColorShade={infoColorShade}
                warningColorShade={warningColorShade}
                successColorShade={successColorShade}
              />
            </Col>
            <Col xxl={6} xl={6} xs={4}>
              <ApexLineChart
                chartData={state.activityByPeriodByScope2}
                direction={"ltr"}
                warning={colors.warning.main}
              />
              {/* <LineChart warning={colors.warning.main} /> */}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  ) : (
    <></>
  );
};

export default ReportPage;
