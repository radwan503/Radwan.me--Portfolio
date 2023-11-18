import React from "react";
import Social from "./element/Social";

export default function Hero() {
  return (
    <section className="hero-banner" id="hero">
      <div className="container">
        <div className="hero-body">
          <div className="social title float-left">
            <Social></Social>
            <p>Follow me</p>
          </div>

          <div className="intro-content ml-5">
            <div className="welcome-title">
              <p>Hello ! I am</p>
              <h1>
                Radwan <span className="bold-color">Ahmed</span>{" "}
              </h1>
            </div>
            <div className="designation-list">
              <ul>
                <li>Front-End Engineer || UI Developer</li>
              </ul>
            </div>
            <div className="resume">
              <button
                data-toggle="modal" data-target="#pdfModal"
                className="btn btn-lg btn-green text-white"
              >
                Get Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade resume-modal" id="pdfModal" tabindex="-1" role="dialog" aria-labelledby="pdfModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl" role="document">
          <div class="modal-content">
            <button type="button" class="close border-0" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
            <div class="modal-body">
              <embed src="/radwanahmed-resume.pdf" type="application/pdf" width="100%" height="600px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
