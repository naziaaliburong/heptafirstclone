import React from "react";
import './Footer.css';

function Footer(){
    return (
        <div className="footer-container">
        <div className="container-fluid">
        <footer className="py-5 footer-sub-cont">
          <div className="row row-new">
            <div className="col-6 col-md-2 mb-3 row-new-sub">
              <h5 className="footer-heading">Quick Link</h5>
              <ul className="nav flex-column footer-list">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About Us</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Terms & Conditions</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Privacy Policy</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Help</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Rooms</a></li>
              </ul>
            </div>
      
            <div className="col-6 col-md-2 mb-3 row-new-sub">
              <h5 className="footer-heading">Support</h5>
              <ul className="nav flex-column footer-list">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Our Location</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">The Hosts</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">About</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Contact</a></li>
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-body-secondary">Restaurant</a></li>
              </ul>
            </div>
      
            <div className="col-6 col-md-2 mb-3 row-new-sub">
              <h5 className="footer-heading">Contact Info</h5>
              <ul className="nav flex-column">
                <div className="display1">
                <li className="nav-item mb-0 footer-sub-heading">Address:</li>
                <li className="nav-item mb-3 footer-list">98 West 21th Street, Suite 721 New York NY 10016</li>
                </div>
                <div className="display2">
                <li className="nav-item mb-0 footer-sub-heading">Phone:</li>
                <li className="nav-item mb-3 footer-list">(+1) 435 3533</li>
                </div>
                <div className="display3">
                <li className="nav-item mb-0 footer-sub-heading">Email:</li>
                <li className="nav-item mb-3 footer-list">info@yourdomain.com</li>
                </div>
              </ul>
            </div>
      
            <div className="col-6 col-md-2 mb-3 row-new-sub">
              <form>
                <h5 className="footer-heading">Subscribe</h5>
                <p className="footer-list">Sign up for our newsletter</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2 footer-email-send">
                  <input id="newsletter1" type="text" className="footer-list footer-input" placeholder="Your email..."/>
                  <a href="/"><button className="btn btn-primary footer-send-button" type="button"><i className="bi bi-send-fill"></i></button></a>
                </div>
                <div className="footer-hr">
                  <hr className="footer-hr"/>
                </div>
              </form>
            </div>
        </div>
      
          <div className="d-flex flex-column flex-sm-row justify-content-between py-5 my-5 pb-5 mb-5 border-top bottom-footer footer-list">
            <p>Copyright © 2024 All rights reserved | This template is made with <i className="bi bi-heart-fill"></i> by <a className="footer-anchor" href="https://colorlib.com/">Colorlib</a></p>
            <ul className="list-unstyled d-flex">
              <li className="ms-3"><a className="link-body-emphasis" href="/"><i className="bi bi-facebook"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><i className="bi bi-twitter"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><i className="bi bi-instagram"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><i className="bi bi-linkedin"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="/"><i className="bi bi-youtube"></i></a></li>
            </ul>
          </div>
        </footer>
      </div>
      </div>
    );
};
export default Footer;