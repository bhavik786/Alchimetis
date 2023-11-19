// ** React Imports
import { Link } from "react-router-dom";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Icons Imports
import { Facebook, Twitter, Mail, GitHub } from "react-feather";

// ** Custom Components
import InputPasswordToggle from "@components/input-password-toggle";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Select from "react-select";
// ** Reactstrap Imports
import {
  Row,
  Col,
  CardTitle,
  CardText,
  Form,
  Label,
  Input,
  Button,
} from "reactstrap";

// ** Styles
import "@styles/react/pages/page-authentication.scss";

import axios from "axios";
import { registerUser } from "../../../Utils/GlobalApiRoutes";

const RegisterCover = () => {
  // ** Hooks
  const { skin } = useSkin();
  const history = useHistory();

  const defaultValues = {
    password: "",
    email: "",
    username: "",
    organizationName: "",
    organizationSector: [],
    organizationSize: [],
    natureOfOrganization: [],
    griFrameworkSelection: [],
  };
  const organizationSectorOptions = [
    { label: "Oil and Gas", value: "oilAndGas" },
    { label: "Coal", value: "coal" },
    {
      label: "Agriculture, Aquaculture & Fishing",
      value: "agricultureAndAquacultureAndFishing",
    },
  ];

  const organizationSizeOptions = [
    { label: "0 - 100", value: "0to100" },
    { label: "101 - 500", value: "101to500" },
    {
      label: "501 +",
      value: "501Plus",
    },
  ];
  const organizationNatureOptions = [
    { label: "Nature 1", value: "nature1" },
    { label: "Nature 2", value: "nature2" },
    {
      label: "Nature 3",
      value: "nature3",
    },
  ];

  const griFrameworkOptions = [
    { label: "GRI 1", value: "gri1" },
    { label: "GRI 2", value: "gri2" },
    {
      label: "GRI 3",
      value: "gri3",
    },
  ];
  const {
    reset,
    control,
    setError,
    setValue,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues,
  });
  const illustration =
      skin === "dark" ? "register-v2-dark.svg" : "register-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const submitForm = (data) => {
    data.csvFiles = [];
    axios.post(registerUser, data).then((response) => {
      console.log(response);
    });
    console.log("submit data --> ", data);
  };
  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <h2 className="brand-text text-primary ms-1">Eco Focus</h2>
        </Link>
        <Col className="d-none d-lg-flex align-items-center p-5" lg="8" sm="12">
          <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
            <img className="img-fluid" src={source} alt="Login Cover" />
          </div>
        </Col>
        <Col
          className="d-flex align-items-center auth-bg px-2 p-lg-5"
          lg="4"
          sm="12"
        >
          <Col className="px-xl-2 mx-auto" xs="12" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Adventure starts here 🚀
            </CardTitle>
            <CardText className="mb-2"></CardText>
            <Form
              className="auth-register-form mt-2"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="mb-1">
                <Label className="form-label" for="register-username">
                  Username
                </Label>
                <Controller
                  control={control}
                  id="username"
                  name="username"
                  render={({ field }) => (
                    <Input
                      placeholder="johndeo"
                      invalid={errors.username && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-email">
                  Email
                </Label>
                <Controller
                  control={control}
                  id="email"
                  name="email"
                  render={({ field }) => (
                    <Input
                      placeholder="john@example.com"
                      invalid={errors.email && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="register-password">
                  Password
                </Label>
                <Controller
                  control={control}
                  id="password"
                  name="password"
                  render={({ field }) => (
                    <InputPasswordToggle
                      className="input-group-merge"
                      placeholder="Password"
                      invalid={errors.password && true}
                      {...field}
                    />
                  )}
                />
              </div>{" "}
              <div className="mb-1">
                <Label className="form-label" for="organizationName">
                  Organization Name
                </Label>
                <Controller
                  control={control}
                  id="organizationName"
                  name="organizationName"
                  render={({ field }) => (
                    <Input
                      placeholder=""
                      invalid={errors.organizationName && true}
                      {...field}
                    />
                  )}
                />
              </div>
              <div className="mb-1">
                <Label className="form-label" for="organizationSector">
                  Organization Sector
                </Label>
                <Controller
                  control={control}
                  id="organizationSector"
                  name="organizationSector"
                  render={({ field }) => (
                    <Select options={organizationSectorOptions} {...field} />
                  )}
                />
              </div>{" "}
              <div className="mb-1">
                <Label className="form-label" for="organizationSize">
                  Organization Size
                </Label>
                <Controller
                  control={control}
                  id="organizationSize"
                  name="organizationSize"
                  render={({ field }) => (
                    <Select options={organizationSizeOptions} {...field} />
                  )}
                />
              </div>{" "}
              <div className="mb-1">
                <Label className="form-label" for="natureOfOrganization">
                  Nature Of Organization
                </Label>
                <Controller
                  control={control}
                  id="natureOfOrganization"
                  name="natureOfOrganization"
                  render={({ field }) => (
                    <Select options={organizationNatureOptions} {...field} />
                  )}
                />
              </div>{" "}
              <div className="mb-1">
                <Label className="form-label" for="griFrameworkSelection">
                  GRI Framework Selection
                </Label>
                <Controller
                  control={control}
                  id="griFrameworkSelection"
                  name="griFrameworkSelection"
                  render={({ field }) => (
                    <Select isMulti options={griFrameworkOptions} {...field} />
                  )}
                />
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="terms" />
                <Label className="form-check-label" for="terms">
                  I agree to
                  <a
                    className="ms-25"
                    // href="/"
                    // onClick={(e) => e.preventDefault()}
                  >
                    privacy policy & terms
                  </a>
                </Label>
              </div>
              <Button color="primary" block>
                Sign up
              </Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">Already have an account?</span>
              <Link to="/login">
                <span>Sign in instead</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default RegisterCover;
