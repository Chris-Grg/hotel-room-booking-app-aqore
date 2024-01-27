import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

const PaymentForm = ({
  handlePaymentSubmit,
  handleChange,
  paymentDetails,
  cardDetails,
}) => {
  return (
    <Form className="paymentForm" onSubmit={handlePaymentSubmit}>
      <Form.Group className="p-4">
        <h3 className="text-center">Payment Details</h3>

        <FloatingLabel controlId="floatingInput" label="Name">
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={paymentDetails.name}
            className="mb-1"
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput" label="Phone Number">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={paymentDetails.number}
            onChange={handleChange}
            className="mb-1"
            minLength={10}
            maxLength={10}
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Card Number">
          <Form.Control
            type="text"
            name="cardNo"
            placeholder="Card Number"
            onChange={handleChange}
            minLength={16}
            maxLength={16}
            value={cardDetails.cardNo}
            className="mb-1"
            required
          />
        </FloatingLabel>
        <Row>
          <Col md={6}>
            <FloatingLabel
              controlId="floatingInput"
              label="Card Expiry Date  (MM/YY)"
            >
              <Form.Control
                type="text"
                name="cardExpiry"
                placeholder="Card Expiry"
                onChange={handleChange}
                value={cardDetails.cardExpiry}
                minLength={5}
                maxLength={5}
                className="mb-1"
                required
              />
            </FloatingLabel>
          </Col>
          <Col md={6}>
            <FloatingLabel controlId="floatingInput" label="CVV">
              <Form.Control
                type="text"
                name="cvv"
                placeholder="CVV"
                onChange={handleChange}
                value={cardDetails.cvv}
                minLength={3}
                maxLength={3}
                className="mb-1"
                required
              />
            </FloatingLabel>
          </Col>
        </Row>

        <Button className="w-100" variant="warning" type="submit">
          Book
        </Button>
      </Form.Group>
    </Form>
  );
};

export default PaymentForm;
