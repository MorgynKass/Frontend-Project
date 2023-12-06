/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import image from "../assets/ttech-img.png";

export default function Price() {
  return (
    <div className="container py-3">
      <header>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a
            href="/"
            className="d-flex align-items-center text-dark text-decoration-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={32}
              className="me-2"
              viewBox="0 0 118 94"
              role="img"
            >
              <title>Bootstrap</title>
            </svg>
            <span className="fs-4">
              <img className="ttech-img" src={image}></img>Tooele Technical
              College Amenities
            </span>
          </a>
        </div>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Plans</h1>
          <p className="fs-5 text-muted">
            Below are a few of our amenity packages.
            <br />
            Feel free to contact our finance office{" "}
            <a href="https://tooeletech.edu/future-students/financial-information/tuition-feescalculator/">
              here.
            </a>
            <br />
            *Renewl of plans are at the start of each course/class.*
          </p>
        </div>
      </header>
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $0<small className="text-muted fw-light">/class</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Access To On Campus Restaurant{" "}
                    <a href="https://simply-bliss-bbq.square.site/">
                      Simply Bliss BBQ (Cafe)
                    </a>
                    , Water Filling Stations, and Lounges
                  </li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  <a href="https://tooeletech.edu/future-students/financial-information/tuition-feescalculator/">
                    Contact Finance Office
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">Simple</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $25<small className="text-muted fw-light">/class</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Access to all water filling stations as well as lounges
                  </li>
                  <li>
                    5 Free Meals From{" "}
                    <a href="https://simply-bliss-bbq.square.site/">
                      Simply Bliss BBQ (Cafe)
                    </a>
                  </li>
                  <li>25% Off Text Book Prices</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  <a href="https://tooeletech.edu/future-students/financial-information/tuition-feescalculator/">
                    Contact Finance Office
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $50<small className="text-muted fw-light">/class</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>
                    Access to all water filling stations as well as lounges
                  </li>
                  <li>
                    10 Free Meals From{" "}
                    <a href="https://simply-bliss-bbq.square.site/">
                      Simply Bliss BBQ (Cafe)
                    </a>
                  </li>
                  <li>50% Off Text Book Prices</li>
                  <li>Access To Convenient Parking Spot</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  <a href="https://tooeletech.edu/future-students/financial-information/tuition-feescalculator/">
                    Contact Finance Office
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src={image} alt="" width={35} height={35} />
            <small className="d-block mb-3 text-muted">
              Tooele Technical College © 2020
            </small>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">Phone: (435) 248-1900</li>
              <li className="mb-1">Fax: (435) 248-1900</li>
              <li className="mb-1">info@tooeletech.edu</li>
              <li className="mb-1">
                {" "}
                <a
                  className="link-secondary text-decoration-none"
                  href="https://www.google.com/search?q=88+South+Tooele+Blvd.&rlz=1C5CHFA_enUS1086US1086&oq=88+South+Tooele+Blvd.&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzI0OWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8"
                >
                  88 South Tooele Blvd.
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://tooeletech.edu/faculty-credentials/"
                >
                  Faculty Credentials
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://drive.google.com/file/d/1tETi58eQltvjbLOvFLOvGFWchV7DN8C-/view"
                >
                  Strategic Plan
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://tooeletech.edu/about-ttech/about-us/mission/"
                >
                  Mission/Vision
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="link-secondary text-decoration-none"
                  href="https://drive.google.com/drive/folders/1BrL67FWvONTpqWLpaecwWmnBQCmUfcRl?usp=sharing"
                >
                  Policies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
