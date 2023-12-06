/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import image from "../assets/ttech-img.png";

export default function About() {
  return (
    <>
      <div className="jumbotron">
        <div className="container-1">
          <h1 className="display-3">About Page</h1>
          <p>
            We provide rewarding, competency-based, affordable, and accessible
            career preparation for youth and adults to meet the needs of Utah
            employers.
          </p>
          <p>
            <a
              className="btn btn-primary btn-lg"
              href="https://tooeletech.edu/about-ttech/about-us/mission/"
              role="button"
            >
              Learn more »
            </a>
          </p>
        </div>
      </div>
      <div className="container-2">
        {/* Example row of columns */}
        <div className="row">
          <div className="col-md-4">
            <h2>Accreditation</h2>
            <p>
              The Tooele Technical College is accredited by the Commission of
              the Council on Occupational Education.{" "}
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://tooeletech.edu/accreditation/"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Mission/Vision</h2>
            <p>
              The Tooele Technical College provides rewarding, competency-based,
              affordable, and accessible career preparation for youth and adults
              to meet the needs of Utah employers.{" "}
            </p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://tooeletech.edu/about-ttech/about-us/mission/"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h2>Faculty Credentials</h2>
            <p>A list of our faculty and information about them.</p>
            <p>
              <a
                className="btn btn-secondary"
                href="https://tooeletech.edu/faculty-credentials/"
                role="button"
              >
                View details »
              </a>
            </p>
          </div>
        </div>
        <hr />
      </div>{" "}
      {/* /container */}
      <footer className="container">
        <p>
          <img
            className="mb-2"
            src={image}
            alt=""
            width={80}
            height={80}
            style={{ padding: "10px" }}
          />
          Tooele Technical College © 2020
        </p>
      </footer>
    </>
  );
}
