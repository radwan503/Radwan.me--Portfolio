import React, { useState, useEffect } from "react";
import experience from "../data/experience.json";

export default function Experienced() {
  const [experienceData, setExperience] = useState([]);
  useEffect(() => {
    const experienceData = experience.experience;
    setExperience(experienceData);
  }, [experienceData]);
  console.log(experienceData);
  return (
    <section className="experienced section" id="experience">
      <div className="container">
        <div className="section-title-text">
          <h1 className="dark-color">EXPERIENCE</h1>
        </div>
        <div className="row">
          {experienceData.map((infoData) => {
            return (
              <div className="col-md-6" style={{ marginBottom: "30px" }}>
                <div className="card bg-darkblue experince-card h-100">
                  <div className="card-body">
                    <p class="card-text">{infoData.year}</p>
                    <h5 class="card-title text-white d-flex justify-content-between align-items-center">
                      {infoData.companyName}
                      <span style={{ fontSize: "13px", letterSpacing: "2px" }}> {infoData.location}</span>
                    </h5>
                    <p style={{ color: "#727272" }}>Role and Responsibility</p>
                    <ul className="m-0">
                      <li>{infoData.role1}</li>
                      <li>{infoData.role2}</li>
                    </ul>
                    <details>
                      <summary style={{ color: "#9dbbdc" }}>

                        Read More
                      </summary>
                      <ul>
                        <li>{infoData.role3}</li>
                        <li>{infoData.role4}</li>
                        <li>{infoData.role5}</li>
                        {infoData?.role6 ?
                          <li>{infoData?.role6}</li> : ""}

                      </ul>
                    </details>
                    <div className="technology-stack">
                      Tech Stack :
                      {infoData.techStack?.map((a) => {
                        return (
                          <>
                            <p className="stack1">{a.stack1}</p>
                            <p className="stack2">{a.stack2}</p>
                            <p className="stack3">{a.stack3}</p>
                            <p className="stack4">{a.stack4}</p>
                            <p className="stack5">{a.stack5}</p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
