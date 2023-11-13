import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import profile from "../assets/image/what.jpeg";
import about from "../data/about.json";

export default function About() {
  const [info, setInfo] = useState([]);
  const [count, setCount] = useState([]);

  useEffect(() => {
    const info = about.profile;
    const count = about.count;
    setInfo(info);
    setCount(count);
  }, [info, count]);

  return (
    <section className="about-section section" id="about">
      <div className="container">
        {info.map((infoData) => {
          return (
            <div className="row align-items-center ">
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="about-text section-title-text go-to">
                  <div className="header-about">
                    {/* <div className="about-avatar">
                      <img src={profile} title="" alt="" />
                    </div> */}
                    <h1 className="dark-color">{infoData.aboutTitle}</h1>
                  </div>

                  <h6 className="lead text-white">{infoData.aboutSubTitle}</h6>
                  <p>
                    I <mark>develop and design</mark>{" "}
                    {infoData.aboutDescription}
                  </p>
                  <p>
                    Front-End Engineer with 4+ years of experience. I enjoy
                    working with React, Next JS,HTML, CSS and  JavaScript to create new things.
                  </p>
                  {/* <details open>
                    <summary>
                      As a Front End Engineer to create user-driven web
                      applications for company. I will be responsible for the
                      design and development of front-end applications that meet
                      the needs of the user. In this role, I will meet with the
                      design team to discuss application features, create
                      application mockups, and write the code for the final
                      website design.
                    </summary>
                    <p className="mt-3">
                      Over the following years I've spent a large amount of time
                      and effort growing my UI development skill, to the point
                      where I'm now very comfortable with:
                    </p>
                    <li>
                      Proficient with Front-End Technology including HTML,
                      JavaScript (
                      <span className="text-success">
                        React, Next JS, jQuery
                      </span>
                      ) and CSS (
                      <span className="text-success">
                        SCSS, Bootstrap, Tailwind, Flexbox and Grid
                      </span>
                      ).
                    </li>
                    <li>
                      Creating semantic and accessible websites with HTML, CSS,
                      transitions, and animations. Ensure designs are in
                      compliance with specifications.
                    </li>
                    <li>
                      Design/Develop mobile-based components with{" "}
                      <span className="text-success">React, IONIC</span>.
                    </li>
                    <li>
                      Consuming and integrating{" "}
                      <span className="text-success">restful APIs</span> in a
                      Single Page JS application.
                    </li>
                    <li>
                      Collaborate with back-end developers and web designers to
                      improve usability.
                    </li>
                    <li>
                      Review, test and debug team member’s code also maintain
                      standard documents at every phase of the development life
                      cycle.
                    </li>
                    <li>Optimize applications for maximum speed.</li>
                    <li>
                      Familiarity with prototyping tools including{" "}
                      <span className="text-success">Adobe XD, Figma.</span>
                    </li>
                    <li>
                      Good knowledge about version control like{" "}
                      <span className="text-success">GIT</span>.
                    </li>
                    <li>Stay up-to-date on emerging technologies.</li>
                  </details> */}

                  <div className="row about-list">
                    {/* <div className="col-md-6">
                                                <div className="media">
                                                    <p>{infoData.point1}</p>
                                                </div>
                                                <div className="media">
                                                    <p>{infoData.point2}</p>
                                                </div>
                                                <div className="media">
                                                    <p>{infoData.point3}</p>
                                                </div>
                                                <div className="media">
                                                    <p>{infoData.point4}</p>
                                                </div>
                                            </div> */}
                    {/* <div className="col-md-6">
                                                <div className="media">
                                                    <label>E-mail</label>
                                                    <p>{infoData.Email}</p>
                                                </div>
                                                <div className="media">
                                                    <label>Phone</label>
                                                    <p>{infoData.Phone}</p>
                                                </div>
                                                <div className="media">
                                                    <label>Skype</label>
                                                    <p>{infoData.Skype}</p>
                                                </div>
                                                <div className="media">
                                                    <label>Freelance</label>
                                                    <p>{infoData.Freelance}</p>
                                                </div>
                                            </div> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 
                <div className="counter">
                    <div className="row">
                        {
                            count.map(counter => {
                                return (
                                    <div className="col-6 col-lg-3">
                                        <div className="count-data text-center">
                                            <h6 className="count h2" data-to="500" data-speed="500">{counter.count}</h6>
                                            <p className="m-0px font-w-600">{counter.Title}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div> */}
      </div>
    </section>
  );
}
