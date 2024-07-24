import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './Footer.css'

const Footer = () => {
  return (
    <div className="container-fluid footerDiv">
      <footer className="text-center text-lg-start text-white">
        <section className="p-4 border-bottom">
          <div className="container d-flex justify-content-between flex-wrap">
            <div className="row ps-4">
              <div className="d-flex d-lg-block">
                <span>Get connected with us on social networks:</span>
              </div>
              <br />
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <a href="" className="me-4">
                  <SocialIcon
                    url="https://x.com/home?lang=id"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="https://www.facebook.com/" className="me-4">
                  <SocialIcon
                    url=""
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="" className="me-4">
                  <SocialIcon
                    url="https://www.instagram.com/nila.transport/"
                    style={{ height: 25, width: 25 }}
                  />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100085440069569" className="me-4">
                  <SocialIcon
                    url=""
                    style={{ height: 25, width: 25 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-2">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Nila Transport Car Rental
                </h6>
                <p>
                Welcome to Nila Transport, the leading car rental service provider in Yogyakarta. We are here to meet all your transportation needs with a variety of comfortable, safe and affordable vehicle choices.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Navigate</h6>
                <p>
                  <a href="/" className="text-reset">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/about" className="text-reset">
                    About
                  </a>
                </p>
                <p>
                  <a href="/reservation" className="text-reset">
                    Reservation
                  </a>
                </p>
                <p>
                  <a href="/cars" className="text-reset">
                    Cars
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-reset">
                    Contact
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i>Yogyakarta
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                 Nilatransport.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> +62 878-4879-7287
                </p>
              
              </div>
            </div>
          </div>
        </section>
        <div className="text-center p-2">
          © 2024 Copyright:{" "}
          <span className="text-reset fw-bold">Nila Transport Car Rental</span>
        </div>
      </footer>
    </div>
  )
}

export default Footer