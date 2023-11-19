// ** Third Party Components
import classnames from "classnames";
import { TrendingUp, User, Box, DollarSign } from "react-feather";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
} from "reactstrap";

const StatsCard = ({ cols, data }) => {
  const data1 = [
    {
      title: data.current,
      subtitle: "Current",
      color: "light-primary",
      icon: <TrendingUp size={24} />,
    },
    {
      title: data.previous,
      subtitle: "Previous",
      color: "light-info",
      icon: <User size={24} />,
    },
    {
      title: data.variance,
      subtitle: "Variance",
      color: "light-danger",
      icon: <Box size={24} />,
    },
  ];

  const renderData = () => {
    return data1.map((item, index) => {
      const colMargin = Object.keys(cols);
      const margin = index === 2 ? "sm" : colMargin[0];
      return (
        <Col style={{ padding: "30px" }}>
          <div className="d-flex align-items-center">
            {/* <Avatar color={item.color} icon={item.icon} className="me-2" /> */}
            <div className="my-auto">
              <h4 className="fw-bolder mb-0">{item.title}</h4>
              <CardText className="font-small-3 mb-0">{item.subtitle}</CardText>
            </div>
          </div>
        </Col>
      );
    });
  };

  return <Row>{renderData()}</Row>;
};

export default StatsCard;
