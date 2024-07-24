import React from "react";
// import "./Home.css";
import "./Home.scss";


// import mobilBMW from "../../../assets/Image/cars/mobilBMW.jpeg";

// import mobilHitam from '../images/cars/mobilHitam.jpg';
// import mobilHitam  from '../../../assets/Image/cars/mobilHitam.jpg';
// import mobilHitam from '../../../assets/Image/cars/mobilHitam.jpeg';
// import hummer from '../images/cars/hummer.jpg';
import hummer from '../../../assets/Image/cars/hummer.jpg';
function Home() {
  return (
    <>
      <div className="container-fluid text-center text-white" id="startBanner">
        <h3>Experience Luxury on the Road</h3>
        <h1>Drive the Car of Your Dreams Today!</h1>

        <a
          id="btnBanner"
          href="/cars"
          className="btn btn-warning text-white rounded-pill mt-3"
        >
          <h5 className="d-inline">Reserve Your Ride Now</h5>
          {/* <FontAwesomeIcon
            icon={faHandPointRight}
            className="ms-3 d-inline fa-1x"
          /> */}
          <i class="fa-solid fa-hand-point-right ms-2 d-inline fa-1x"></i>
        </a>
      </div>
      <div className="container">
        <h2 className="text-center mt-5 mb-3">
        WHY CHOOSE US AMONG SO MANY OPTIONS?
        </h2>
        <h4 className="text-center mb-5">
        Discover the Reasons We Stand Out
        </h4>
        <div className="row gy-5">
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="bg-warning rounded p-4 benefits">
              <i class="fa-solid fa-money-bill-1 d-inline fa-2x"></i>
              <h4 className="d-inline ms-3">EXCLUSIVE PRICES</h4>
              <p className="mt-3 fs-5">
              Experience unbeatable value! Our commitment to affordability has placed us at the top for five consecutive years. We strive to offer you the best deals without compromising on quality.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="bg-warning rounded p-4 benefits">
              <i class="fa-solid fa-shield-halved d-inline fa-2x"></i>
              <h4 className="d-inline ms-3">PREMIUM SAFETY</h4>
              <p className="mt-3 fs-5">
              Your safety is our top priority. Drive with peace of mind knowing that our vehicles are maintained to the highest safety standards. Enjoy a worry-free journey both on and off the road.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="bg-warning rounded p-4 benefits">
              {/* <FontAwesomeIcon icon={faClock} className="d-inline fa-2x" /> */}
              <i class="fa-solid fa-clock d-inline fa-2x"></i>
              <h4 className="d-inline ms-3">TIME-SAVING CONVENIENCE</h4>
              <p className="mt-3 fs-5">
              Save time with our streamlined booking process, available at multiple locations nationwide and online. Skip the hassle and get on the road quickly with our efficient and user-friendly service.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid row mt-5 mb-5 gy-3">
        <div className="col-lg-5 col-md-6 col-sm-12 ">
          <h2>A PIECE OF OUR FLEET</h2>
          <p className="fs-4">
            Each piece of our fleet is chosen carefully with great attention to
            detail.
          </p>
          <a href="/cars" className="btn btn-lg btn-outline-warning text-black">
            Our fleet
          </a>
        </div>
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div
            id="carCarusel"
            className="carousel slide rounded"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2500">
                <img src={hummer} className="d-block w-100" alt="Fleet 1" />
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <img src={hummer} className="d-block w-100" alt="Fleet 1" />
              </div>
              <div className="carousel-item" data-bs-interval="2500">
                <img src={hummer} className="d-block w-100" alt="Fleet 1" />
              </div>
            </div>
            <button
              className="carousel-control-prev text-warning"
              type="button"
              data-bs-target="#carCarusel"
              data-bs-slide="prev"
            >
              {/* <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                className="d-inline fa-2x"
              /> */}
              <i class="fa-solid fa-circle-arrow-left d-inline fa-2x"></i>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next text-warning"
              type="button"
              data-bs-target="#carCarusel"
              data-bs-slide="next"
            >
              {/* <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className="d-inline fa-2x"
              /> */}
              <i class="fa-solid fa-circle-arrow-right d-inline fa-2x"></i>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
