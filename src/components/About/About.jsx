import React from "react";
import "./About.css";
// import hand from "../images/about/hand.jpg";
import hand from "../../assets/Image/about/hand.jpg";
// import driving from "../images/about/driving.jpg";
import driving from "../../assets/Image/about/driving.jpg";
// import maserati from "../images/about/maserati_article.jpg";
import maserati from '../../assets/Image/about/maserati_article.jpg';
// import audiRs4 from "../images/about/audi_rs4.jpg";
import audiRs4 from '../../assets/Image/about/audi_rs4.jpg';
// import caterham from "../images/about/caterham.jpg";
import caterham from '../../assets/Image/about/caterham.jpg';
// import delmarinaLopez from "../images/about/delmarinaLopez.jpg";
import delmarinaLopez from '../../assets/Image/about/delmarinaLopez.jpg';
import testimoni1 from '../../assets/Image/about/testimoni1.jpg';
import testimoni2 from '../../assets/Image/about/testimoni2.jpg';
import testimoni3 from '../../assets/Image/about/testimoni3.jpg';
// import pierrePerson from "../images/about/pierrePerson.jpg";
import pierrePerson from "../../assets/Image/about/pierrePerson.jpg";
// import williamShatner from "../images/about/williamShatner.jpg";
import williamShatner from "../../assets/Image/about/williamShatner.jpg";
// import williamShatner from "../images/about/williamShatner.jpg";

export const About = () => {
  return (
    <>
    <div className="banner container-fluid p-0">
      <div className="container">
        <div className="row pt-5">
          <h1 className="text-white pt-5 text-center">Nila Transport</h1>
          <p className="text-white text-center ">At Nila Transport, we not only provide vehicles, but also provide an unforgettable travel experience in Yogyakarta. As a leading car rental service provider in this city, we are proud to be the first choice for customers who are looking for comfort, safety and ease of driving. </p>
        </div>
      </div>
    </div>

    <div className="container d-flex flex-wrap align-items-center justify-content-center">
      {/* REVIEWS */}
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={testimoni1} alt="Sumanto Junior" />
              </div>
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <div>
                  <h3 className="text-white fs-5">Sumanto Junior</h3>
                  <p className="fs-6 text-white">
                  Saya I am very satisfied with the car rental service from Nila Transport. The ordering process was very easy and fast. The cars provided are in very good condition, clean and comfortable to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={testimoni2} alt="Yanti Uhuy" />
              </div>
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <div>
                  <h3 className="text-white fs-5">Yanti Uhuy</h3>
                  <p className="fs-6 text-white">
                  I am extremely satisfied with the car rental service from Nila Transport. The booking process was very easy and quick, and the staff were friendly and professional, answering all my questions patiently. The car provided was in excellent condition, clean, and comfortable to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="box">
            <div className="body">
              <div className="imgContainer">
                <img src={testimoni3} alt="Wati martinah" />
              </div>
              <div className="content d-flex flex-column align-items-center justify-content-center">
                <div>
                  <h3 className="text-white fs-5">Wati martinah</h3>
                  <p className="fs-6 text-white">
                  The car I rented was in pristine condition, both in terms of cleanliness and functionality. It provided a smooth and comfortable ride throughout my journey. I also appreciated the competitive pricing, which offered great value for the high-quality service..
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Articles */}
    <div className="container-fluid">
      <div className="container">
        <div className="row pt-2 pb-2 greyBackground d-flex flex-wrap">
          <div className="col-lg-6 col-sm-12">
            <img className="aboutImage" src={maserati} alt="Maserati" />
          </div>
          <div className="col-lg-6 col-sm-12 pt-5">
            <div>
              <h3>2024 Maserati GranTurismo revealed</h3>
            </div>
            <div>
              <p>
                New Maserati GranTurismo gets two V6 engine options plus a
                fully electric version that produces 750bhp. Here’s everything
                you need to know, including the price, specs and release
                date...
              </p>
              <p>On sale: Spring 2023 | Price from: £125,000 (est)</p>
            </div>
            <div>
              <a
                className="btn btn-warning"
                href=""
                target="_blank" rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="row pt-2 pb-2">
          <div className="col-lg-6 col-sm-12 pt-5">
            <div>
              <h3>2024 Audi RS4 Avant Competition review</h3>
            </div>
            <div>
              <p>
                With a focus on the track, the limited edition Audi RS4 Avant
                Competition is faster and handles better than the normal RS4.
                But should you snap one up or stick to the standard car?...
              </p>
              <p>On sale Now | Price from £84,600</p>
            </div>
            <div>
              <a
                className="btn btn-warning"
                href=""
                target="_blank" rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img className="aboutImage" src={audiRs4} alt="Audi RS4" />
          </div>
        </div>
        <div className="row pt-2 pb-2 greyBackground">
          <div className="col-lg-6 col-sm-12">
            <img src={caterham} className="pb-2 aboutImage" alt="Caterham" />
          </div>
          <div className="col-lg-6 col-sm-12 pt-5">
            <div>
              <h3>Revealed: Every brand's most popular car</h3>
            </div>
            <div>
              <p>
                What are the most popular cars with What Car? readers? Here's
                every brand's number one – and some of them might surprise
                you...
              </p>
              <p>
                If it wasn’t for the Caterham Seven’s LED headlights and brake
                lights, it could easily be mistaken for something from the
                1950s. That’s because it’s remained largely the same since it
                first appeared as the Lotus Seven in 1957.
              </p>
            </div>
            <div>
              <a
                className="btn btn-warning"
                href=""
                target="_blank" rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

