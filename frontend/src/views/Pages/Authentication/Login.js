/* eslint-disable */

import { useSkin } from "@hooks/useSkin";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Mail, GitHub } from "react-feather";
import InputPasswordToggle from "@components/input-password-toggle";
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
import "@styles/react/pages/page-authentication.scss";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { loginUser } from "../../../Utils/GlobalApiRoutes";

const LoginCover = () => {
  const { skin } = useSkin();

  const history = useHistory();

  const defaultValues = {
    password: "password",
    email: "admin@gmail.com",
  };

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

  const illustration = skin === "dark" ? "login-v2-dark.svg" : "login-v2.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;

  const submitForm = (data) => {
    axios
      .post(loginUser, data)
      .then((response) => {
        let dataR = {
          user: response.data.user,
          accessToken: response.data.accessToken,
        };
        console.log(dataR);
        localStorage.setItem("userJson", JSON.stringify(dataR));
        history.push("/home");
      })
      .catch((err) => {
        alert("Please enter correct email or password !");
      });
    // const email = data && data.email;
    // if (email == "admin@gmail.com") {
    //   data.role = "Admin";
    //   localStorage.setItem("userJson", JSON.stringify(data));
    // } else if (email == "superuser@gmail.com") {
    //   data.role = "SuperUser";
    //   localStorage.setItem("userJson", JSON.stringify(data));
    // } else if (email == "user@gmail.com") {
    //   data.role = "User";
    //   localStorage.setItem("userJson", JSON.stringify(data));
    // }
    // history.push("/home");
  };

  return (
    <div className="auth-wrapper auth-cover">
      <Row className="auth-inner m-0">
        <Link className="brand-logo" to="/" onClick={(e) => e.preventDefault()}>
          <h2 className="brand-text text-primary ms-1">Eco Focus </h2>
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
          <Col className="px-xl-2 mx-auto" sm="8" md="6" lg="12">
            <CardTitle tag="h2" className="fw-bold mb-1">
              Welcome! 👋
            </CardTitle>
            <CardText className="mb-2">
              Please sign-in to your account and start the adventure
            </CardText>
            <Form
              className="auth-login-form mt-2"
              onSubmit={handleSubmit(submitForm)}
            >
              <div className="mb-1">
                <Label className="form-label" for="login-email">
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
                <div className="d-flex justify-content-between">
                  <Label className="form-label" for="login-password">
                    Password
                  </Label>
                  <Link to="/pages/forgot-password-cover">
                    <small>Forgot Password?</small>
                  </Link>
                </div>

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
              </div>
              <div className="form-check mb-1">
                <Input type="checkbox" id="remember-me" />
                <Label className="form-check-label" for="remember-me">
                  Remember Me
                </Label>
              </div>
              <Button color="primary">Sign in</Button>
            </Form>
            <p className="text-center mt-2">
              <span className="me-25">New on our platform?</span>
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </p>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default LoginCover;
