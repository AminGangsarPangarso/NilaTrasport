import React from "react";
import { useState } from "react";
import mobilcontact from "../../assets/Image/cars/mobilcontact.png";
import axios from "axios";

//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [yourMessage, setYourMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    const data = {
      fullName: fullName,
      email: email,
      yourMessage: yourMessage,
    };

    if (
      document.getElementById("fullName").value == "" ||
      document.getElementById("email").value == "" ||
      document.getElementById("yourMessage").value == ""
    ) {
      toast.error("Please fill out all the information!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      axios.post("http://localhost:8080/api/posts/insert", data);
      // console.log("hi")
      toast.success("Message sent!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setFullName("");
    setEmail("");
    setYourMessage("");
  };
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row mt-4">
          <h2 className="mb-3 text-center">Message Us</h2>
          <div className="col-lg-6 col-sm-12">
            <img src={mobilcontact} alt="" className="w-100" />
          </div>
          <div className="col-lg-6 col-sm-12">
            <form className="offset-1 p-4 shadow-lg" onSubmit={sendMessage}>
              <div class="form-group">
                <label for="fullName">Full name</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  value={fullName}
                  placeholder="John Doe"
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  value={email}
                  placeholder="name@example.com"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
              <div class="form-group">
                <label for="yourMessage">Your Message</label>
                <textarea
                  class="form-control"
                  id="yourMessage"
                  value={yourMessage}
                  rows="3"
                  onChange={(event) => {
                    setYourMessage(event.target.value);
                  }}
                ></textarea>
              </div>
              <button
                class="btn btn-lg btn-warning mt-4"
                type="submit"
                id="submitBtn"
              >
                Send
              </button>
              <ToastContainer />
              {/* <ContactModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            /> */}
            </form>
          </div>
        </div>
      </div>
      <div className="container mb-3">
        <h3 className="text-center mb-3">Visit us</h3>
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043.593058762551!2d110.45616502847628!3d-7.785253170768912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5a714322bb35%3A0xff4dd362b3b02520!2sMangunan%2C%20Kalitirto%2C%20Kec.%20Berbah%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055573!5e1!3m2!1sid!2sid!4v1721765506693!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
