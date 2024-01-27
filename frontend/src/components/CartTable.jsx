import React from "react";

import { Table } from "react-bootstrap";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartTable = ({
  CartItem,
  // calculateTotal,
  totalAmt,
  discount,
  handleTrashClick,
}) => {
  return (
    <div className="cartItems cartTable">
      <h3 className="text-center">Cart Items</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Room No</th>
            <th>Room Type</th>
            <th>Dates</th>
            <th>Rate</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {CartItem.map((item) => (
            <tr key={item.id}>
              <td>{item.roomNo}</td>
              <td>{item.roomType}</td>
              <td className="font-weight-lighter font-italic">
                {item.checkInDate} - {item.checkOutDate}
              </td>
              <td>${item.price}</td>
              <td>
                $
                {moment(item.checkOutDate).diff(
                  moment(item.checkInDate),
                  "days"
                ) * item.price}
              </td>
              <td>
                <button
                  type="button"
                  onClick={() => handleTrashClick(item.id)}
                  aria-label="Delete"
                  className="trash-button"
                  style={{ border: "none", outline: "none" }}
                >
                  <FontAwesomeIcon icon={faTrash} size="lg" />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="font-italic fw-light">
              Discount{" "}
              <sub
                className="font-italic fw-lighter text-muted"
                // style={{ fontSize: "x-small" }}
              >
                *book 3 or more rooms to get discount
              </sub>
            </td>
            <td colSpan="1" className="fw-light">
              {discount}%
            </td>
            <td colSpan="1" className="fw-light">
              ${discount}
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="3">Total</td>
            <td colSpan="1">-</td>
            {/* <td>${calculateTotal()}</td> */}
            <td>${totalAmt}</td>

            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CartTable;
