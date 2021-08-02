import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import { initiatePayment, preOrderPayment } from "../../Api";
import Modal from "../Modal/Modal";
import { useHistory } from "react-router-dom";
import PaymentTest from "../paymentTest";
import Axios from "axios";
import { useLocation } from 'react-router-dom';


export default function Checkout() {
  const [checkOutData, setcheckOutData] = useState({});
  const [nameOfClass, setnameOfClass] = useState("");
  const query=useLocation()
console.log(query)
  const SaveCart = []



  const [showModal, setshowModal] = useState(false);
  const [showPaymentTest, setshowPaymentTest] = useState(false);

  const history = useHistory();

  // console.log("Checkout data =>", SaveCart);

  const [sendAmount, setsendAmount] = useState(0);

  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [userstate, setState] = useState("");
  const [postal, setPostal] = useState("");
  const [showPaymentModal, setshowPaymentModal] = useState(false);
  const [orderId, setorderId] = useState(null);



  useEffect(() => {
   
    var temp = Number(Math.round((24999 / 100) * 18)) + Number(24999);

    setsendAmount(temp);
    setnameOfClass(query.state);

    return () => {};
  }, [0]);


  const sendOrder = async () => {
    // const res = await
    const currentUser = JSON.parse(localStorage.getItem('eklavyaStudent'))
    if(currentUser){

      var cartData = {
        className: query.state,
        userAddress: address,
        userState: userstate,
        userTown: town,
        userPostal: postal,
        totalAmount: sendAmount,
        studentId:currentUser.studentId
      };
      
      console.log("Sending data is", cartData);
      
      const res = await preOrderPayment(cartData);
      console.log("Order id arrived from server", cartData);
      
      // setshowPaymentTest(true);
      setorderId(res.data.orderId.toUpperCase());
    }else{
      alert('Login First')
    }
  };

  return (
    <Layout>
      <div>
        <div>
          {/* Page Title Section Start */}
          <div className="page-title-section section">
            <div className="page-title">
              <div className="container">
                <center>
                  <h3>Course Checkout</h3>
                </center>
                <br />
              </div>
            </div>
          </div>

          {showModal && (
            <Modal
              heading="Payment Successful"
              content="Your Payment has been successful !"
              buttonText="Okay"
              showModal={showModal}
              setshowModal={setshowModal}
            />
          )}

          {/* Page Title Section End */}
          {/*Checkout section start*/}
          <div className="checkout-section section section-padding-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Checkout Form Start*/}
                  <form action="#" className="checkout-form">
                    <div className="row row-40">
                      <div className="col-lg-7">
                        {/* Billing Address */}
                        <div id="billing-form" className="mb-10">
                          <h4 className="checkout-title">Billing Address</h4>
                          <div className="row">
                            <div className="col-12 mb-10">
                              <label>Address*</label>
                              <input
                                required
                                type="text"
                                placeholder="Your Address..."
                                onChange={(e) => setAddress(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6 col-12 mb-10">
                              <label>Country*</label>
                              <select>
                                <option>India</option>
                                <option>Bangladesh</option>
                                <option>China</option>
                                <option>country</option>

                                <option>Japan</option>
                              </select>
                            </div>
                            <div className="col-md-6 col-12 mb-10">
                              <label>Town/City*</label>
                              <input
                                required
                                type="text"
                                placeholder="Town/City"
                                onChange={(e) => setTown(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6 col-12 mb-10">
                              <label required>State*</label>
                              <input
                                type="text"
                                placeholder="State"
                                onChange={(e) => setState(e.target.value)}
                              />
                            </div>
                            <div className="col-md-6 col-12 mb-10">
                              <label required>Postal Code*</label>
                              <input
                                type="text"
                                placeholder="Zip Code"
                                onChange={(e) => setPostal(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="col-lg-5">
                        <div className="row">
                          {/* Cart Total */}
                          <div className="col-12 max-mb-60">
                            <h4 className="checkout-title">Cart Total</h4>
                            <div className="checkout-cart-total">
                              <h4>
                                Product <span>Total</span>
                              </h4>
                              <ul>
                               
                                      <li >
                                        Class {nameOfClass}
                                      
                                        <span>₹ 24999</span>
                                      </li>
                                   
                              </ul>

                              <p>
                                GST Tax
                                <span>₹ {(24999 / 100) * 18}</span>
                              </p>

                              <h4>
                                Grand Total
                                <span>
                                  Rs 
                                  {24999 +
                                    (24999 / 100) * 18}
                                </span>
                              </h4>
                            </div>
                          </div>
                          {/* Payment Method */}
                          <div className="col-12">
                            {/* <a
                              style={{
                                padding: "10px 40px",
                                backgroundColor: "#eb5019",
                                color: "white",
                              }}
                              onClick={() => {
                                // makePayment();
                                setshowPaymentModal(true)
                              }}
                            >
                              Place Order
                            </a> */}

                            {orderId && sendAmount && (
                              <PaymentTest
                                showPaymentModal={showPaymentModal}
                                totalAmount={sendAmount}
                                orderId={orderId}
                                address={address}
                                town={town}
                                postal={postal}
                                userstate={userstate}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>

                  {!orderId && (
                    <button
                      style={{
                        padding: "10px 40px",
                        backgroundColor: "#eb5019",
                        color: "white",
                        border: "none",
                      }}
                      onClick={() => {
                        sendOrder();
                      }}
                    >
                      Next
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/*Checkout section end*/}
        </div>
      </div>
    </Layout>
  );
}
