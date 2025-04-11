import React, { useState, useEffect } from "react";
import { Badge } from "react-bootstrap";
import profile from "../assets/image/p1.png";
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
                    Experienced Software Engineer with 5+ years of expertise in React.js, Next.js, JavaScript, TypeScript, and modern web technologies.
                  </p> 
                  <p>
                    Currently, I work as a Senior Software Engineer at <strong>City Bank</strong>, developing and maintaining responsive web applications for online banking and financial services.
                  </p>
                  <p>
                    Previously, I was a Software Engineer in a <strong>Ukraine-based software company</strong>, where I successfully delivered 10+ interactive and responsive websites, ensuring pixel-perfect UI implementation.  
                    My role included conducting code reviews, optimizing UI consistency across devices, and exploring emerging web technologies to enhance future-proof solutions.
                  </p>
                  <details>
                    <summary>Read more about me</summary>
                  <p>
                    Before that, I worked at <strong>QCOOM</strong> (an e-commerce-based company) as a Software Engineer (Front-End), contributing to e-commerce, food delivery, and courier service platforms.
                  </p>
                  <p>
                    Before that, I was a Front-End Engineer at <strong>Tiger IT Bangladesh Ltd</strong>, collaborating on multiple HRM, task management, and cross-platform applications while integrating RESTful APIs.
                  </p>
                  <p>
                    Skilled in UI/UX optimization, performance enhancement, mentoring junior developers, and implementing best practices for accessibility. Passionate about building efficient, scalable, and visually appealing web solutions.
                  </p>
                  <p>
                    I have worked on various projects, including <strong>national</strong>, <strong>international</strong>, and <strong>freelance</strong> assignments, covering diverse domains such as finance, e-commerce, HRM, and task management. My experience includes collaborating with teams across different regions, ensuring smooth development and deployment across multiple platforms.
                  </p>
                  </details>


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

                  {/* <div className="row about-list">
                    <div className="col-md-6">
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
                    </div>
                    <div className="col-md-6">
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
                    </div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="d-none d-lg-block" >
                  <img src={profile} title="" alt="" style={{ maxHeight: "400px", borderRadius: "50%", border: "3px solid #fff" }} />
                </div>
              </div>
            </div>
          );
        })}


        <div className="counter">
          <div className="row">
            {
              count.map(counter => {
                return (
                  <div className="col-6 col-lg-3">
                    <div className="count-data text-center">
                      <h6 className="count h2" data-to="500" data-speed="500">{counter.count}</h6>
                      <p className="m-0px font-w-600 text-capitalize">{counter.Title}</p>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </div>
    </section>
  );
}
