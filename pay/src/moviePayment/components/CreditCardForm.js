import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import useForm from "../useForm";
import Cards from 'react-credit-cards';
import "./CreditCardForm.css";
import "react-credit-cards/es/styles-compiled.css";

const CreditCardForm = () => {
  const { handleChange, handleFocus, handleSubmit, values, errors } = useForm();
  return (

    <div className="container">
      <div className="box justify-content-center align-items-center">
        <div className="formDiv">
          <div className="creditCard">
            <Cards
              cvc={values.cardSecurityCode}
              expiry={values.cardExpiration}
              focused={values.focus}
              name={values.cardName}
              number={values.cardNumber}
            />
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group  className="form">
              <Form.Control
                type="text"
                id="cardName"
                name="cardName"
                placeholder="Cardholder Name"
                value={values.cardName}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cname}
              />
            </Form.Group>
            <Form.Group  className="form">
              <Form.Control
                type="number"
                id="cardNumber"
                data-testid="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                value={values.cardNumber}
                onChange={handleChange}
                onFocus={handleFocus}
                isValid={errors.cnumber}
              />
            </Form.Group>
            <Row  className="form">
              <Col>
                <Form.Group >
                  <Form.Control
                    type="text"
                    name="cardType"
                    id="cardType"
                    placeholder="Card Type"
                    value={values.cardType}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ctype}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardExpiration"
                    name="cardExpiration"
                    placeholder="Expiration Date"
                    value={values.cardExpiration}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cexp}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row  className="form">
              <Col>
                <Form.Group>
                  <Form.Control
                    type="number"
                    id="cardSecurityCode"
                    name="cardSecurityCode"
                    placeholder="Security Code"
                    value={values.cardSecurityCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.ccvv}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Control
                    type="text"
                    id="cardPostalCode"
                    name="cardPostalCode"
                    placeholder="Postal Code"
                    value={values.cardPostalCode}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    isValid={errors.cpostal}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button className="button"  size="block" id="validateButton" type="submit">
              Validate
            </Button>
          </Form>
        </div>
        <Alert id="alertMessage" variant={errors.variant} show={errors.show} visibility= "hidden">
          {errors.message}
        </Alert>
      </div>
    </div>
  );
};

export default CreditCardForm;