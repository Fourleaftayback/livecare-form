import React, { useState, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "reactstrap";
import FormItem from "../forms/FormItem";
import vaidateInput from "../../validators/validateInputs";

const FormPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [facility, setFacility] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    //
  }, [errors]);

  const onSubmit = () => {
    let data = {
      firstName,
      lastName,
      middleName,
      email,
      phone,
      address,
      city,
      state
    };

    let { isValid, errors } = vaidateInput(data);
    if (!isValid) setErrors(errors);
    // console.log("form sent", data);
  };

  return (
    <Container fluid={true}>
      <h3>Please Register</h3>
      <Form>
        <Row>
          <Col>
            <FormItem
              label="First Name"
              type="firstName"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              error={errors.firstName}
              onChange={e => setFirstName(e.target.value)}
            />
          </Col>
          <Col>
            <FormItem
              label="Middle Name"
              type="text"
              name="middleName"
              placeholder="Middle Name"
              value={middleName}
              error={errors.middleName}
              onChange={e => setMiddleName(e.target.value)}
            />
          </Col>
          <Col>
            <FormItem
              label="Last Name"
              type="text"
              name="lastName"
              placeholder="last Name"
              value={lastName}
              error={errors.lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormItem
              label="Email"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              error={errors.email}
              onChange={e => setEmail(e.target.value)}
            />
          </Col>
          <Col>
            <FormItem
              label="Phone"
              type="phone"
              name="phone"
              placeholder="phone"
              value={phone}
              error={errors.phone}
              onChange={e => setPhone(e.target.value)}
            />
          </Col>
        </Row>
        <FormItem
          label="Facility Name"
          type="text"
          name="facility"
          placeholder="facility"
          value={facility}
          error={errors.facility}
          onChange={e => setFacility(e.target.value)}
        />
        <FormItem
          label="Address"
          type="text"
          name="address"
          placeholder="address"
          value={address}
          error={errors.address}
          onChange={e => setAddress(e.target.value)}
        />
        <Row>
          <Col>
            <FormItem
              label="City"
              type="text"
              name="city"
              placeholder="city"
              value={city}
              error={errors.city}
              onChange={e => setCity(e.target.value)}
            />
          </Col>
          <Col>
            <FormItem
              label="State"
              type="text"
              name="state"
              placeholder="state"
              value={state}
              error={errors.state}
              onChange={e => setState(e.target.value)}
            />
          </Col>
        </Row>
        <Button color="primary" block={true} onClick={onSubmit}>
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default FormPage;
