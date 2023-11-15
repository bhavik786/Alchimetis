import React from "react";
import { ArrowRight, Cpu } from "react-feather";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Col,
} from "reactstrap";
import StatsHorizontal from "../../@core/components/widgets/stats/StatsHorizontal";

const ReportsCard = ({ name }) => {
  console.log("...", name);
  return (
    <>
      <StatsHorizontal
        style={{ border: "1px solid black" }}
        icon={<ArrowRight size={21} />}
        color="primary"
        stats={name}
        // statTitle="CPU Usage"
      />
    </>
  );
};

export default ReportsCard;
