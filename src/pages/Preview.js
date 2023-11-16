import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Preview = () => {
  const location = useLocation();
  console.log(location.state);
  const { detailsData } = location.state || {};
  console.log(detailsData);
  // useEffect(() => {
  //   const handleContextMenu = (event) => {
  //     event.preventDefault(); // Prevent the default right-click menu
  //   };

  //   // Add event listener when the component mounts
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  if (!detailsData) {
    return <div>No Item Data</div>;
  }

  return (
    <>
      <section className="hero-banner">
        <div className="container">
          <div className="hero-body">
            <div className="intro-content">
              <div className="welcome-title">
                <p>CASE STUDY</p>
                <h1>
                  {detailsData.title[0]}
                  <br />
                  {detailsData.title[1]}
                </h1>
              </div>
              <div className="designation-list">
                <ul>
                  {detailsData?.subtitle?.map((val) => (
                    <li className="text-capitalize">{val}</li>
                  ))}
                </ul>
              </div>
              <div className="resume">
                <a
                  href={detailsData?.demo ? detailsData?.demo :"/"}
                  className={detailsData?.demo==''?"btn btn-lg btn-green text-white disabled":"btn btn-lg btn-green text-white"}
                  title={detailsData?.demo==''?"NO DEMO LINK":"DEMO"}
                >
                  Live Preview
                </a>
                <p className="mt-2 text-light disabled">{detailsData?.demo=='' ? 'Explore the visual representation through the screenshots provided, as a demo link is not available':''}</p>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container" id="info">
        <div className="row">
          <div className="col-md-6">
            <h4 className="my-3 text-light">Project Description</h4>
          </div>
          <div className="col-md-6">
            <div className="d-flex  justify-content-end mt-3">
              Work For :
              <p className="ml-3 m-0 text-uppercase">{detailsData.client}</p>
            </div>
          </div>
          <div className="col-md-12">
            <p>{detailsData.description}</p>
            <div className="d-flex align-items-center">
              Tech Stack:
              {detailsData?.techStack.map((tech) => (
                <span
                  className="bg-light text-dark text-capitalize rounded px-2 py-0 ml-3"
                  style={{ fontSize: "13px" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container project-imgaes" id="images">
        <div className="project-imgs mt-5 disable-copy">
          <div className="mb-5">
            <img
              className="img-fluid rounded"
              src={detailsData?.topBanner}
              alt={detailsData?.name}
              title={detailsData?.name}
              style={{ border: "3px solid #fff" }}
            />
          </div>
        </div>
      </section>
      <section className="my-role">
        <div class="container mt-5">
          <h4 className="my-3 text-light">Features I work</h4>
          <div class="row">
            {detailsData?.workido?.map((task) => (
              <div class="col-md-6 mb-4">
                <div class="card h-100 bg-darkblue experince-card">
                  <div class="card-body">
                    <h5 class="card-title">{task.title}</h5>
                    <ul>
                      {task.subtitle.map((subtask) => (
                        <li className="text-capitalize">{subtask}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="container features-images">
        {/* <h4 className="my-3 text-light">Feature I work UI</h4> */}
        {detailsData.images.map((image) => (
          <>
            <p className=" text-uppercase">{image?.title}</p>
            <div className="screenshot-img mb-5">
              <img
                className="img-fluid"
                src={image.imgUrl}
                alt={image.title}
                title={image.title}
              />
            </div>
          </>
        ))}
      </section>

      <section className="my-role">
        <div class="container mt-5">
          <h4 className="my-3 text-light">My Role & Responsibility</h4>
          <div class="row">
            {detailsData?.roles?.map((role) => (
              <div class="col-md-4 mb-4">
                <div class="card h-100 bg-darkblue experince-card">
                  <div class="card-body">
                    <h5 class="card-title">{role.title}</h5>
                    <p class="card-text">{role.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Preview;
