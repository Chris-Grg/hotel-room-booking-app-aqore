import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Container } from "react-bootstrap";
import "./CartPageStyles.css";
import PaymentForm from "../components/PaymentForm";
import moment from "moment";
import { toast } from "react-toastify";
import axios from "axios";
import CartTable from "../components/CartTable";

const CartPage = () => {
  const { CartItem, setCartItem } = useContext(CartContext);
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    phone: "",
  });
  const [cardDetails, setCardDetails] = useState({
    cardNo: "",
    cardExpiry: "",
    cvv: "",
  });
  const [booking, setBooking] = useState([]);
  const [totalAmt, setTotalAmt] = useState([]);

  let discount = 0;
  const cartSize = CartItem.length;
  if (cartSize >= 3) {
    discount = 10;
  }
  useEffect(() => {
    calculateTotal();
  }, [CartItem]);
  const calculateTotal = () => {
    let total = 0;
    CartItem.map((item) => {
      total =
        total +
        moment(item.checkOutDate).diff(moment(item.checkInDate), "days") *
          item.price;
    });
    setTotalAmt(total - (discount / 100) * total);
  };

  const handleChange = (event) => {
    if (event.target.name === "name" || event.target.name === "phone") {
      setPaymentDetails({
        ...paymentDetails,
        [event.target.name]: event.target.value,
      });
    } else {
      setCardDetails({
        ...cardDetails,
        [event.target.name]: event.target.value,
      });
    }
  };
  const handlePaymentSubmit = async (event) => {
    event.preventDefault();
    if (
      paymentDetails.name === "" ||
      paymentDetails.number === "" ||
      cardDetails.cardNumber === "" ||
      cardDetails.cardExpiry === "" ||
      cardDetails.cvv === ""
    ) {
      toast.error("Invalid Credentials - cannot be empty");
    } else {
      const bookData = {
        userDetails: paymentDetails,
        cartItems: CartItem,
        total: totalAmt,
        cardDetails: cardDetails,
      };
      setBooking(bookData);
      try {
        const apiUrl =
          import.meta.env.VITE_BACKEND_API || "http://localhost:7000";
        const response = await axios.post(`${apiUrl}/api/bookings`, bookData);
        toast.success("Booking Successful");
        window.location.href = "/success";
      } catch (error) {
        toast.error("Error creating booking");
        console.error("Error:", error);
      }
    }
  };
  const handleTrashClick = (id) => {
    const newCart = CartItem.filter((item) => item.id !== id);
    setCartItem(newCart);
  };
  return (
    <Container className="bg-light d-flex flex-column justify-content-center align-items-center mt-3 p-3">
      {CartItem.length > 0 ? (
        <>
          <CartTable
            CartItem={CartItem}
            totalAmt={totalAmt}
            discount={discount}
            handleTrashClick={handleTrashClick}
          />
          <PaymentForm
            handlePaymentSubmit={handlePaymentSubmit}
            handleChange={handleChange}
            paymentDetails={paymentDetails}
            cardDetails={cardDetails}
          />
        </>
      ) : (
        <p>No items in Cart</p>
      )}
    </Container>
  );
};

export default CartPage;
