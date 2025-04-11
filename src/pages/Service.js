import React, { useState, useEffect } from 'react'
import { FaMagic, FaCode, FaPencilAlt, FaBullhorn, FaEye, FaUmbrella } from "react-icons/fa";
import roles from '../data/roles.json'
const Service = () => {
 const [rolesData, setRolesData] = useState([]);
 useEffect(() => {
  const rolesData = roles.roles;
  setRolesData(rolesData);
 }, [rolesData]);
 console.log(rolesData);

 return (
  <>
   <section id="services" class="current">
    <div class="services-top">
     <div class="container bootstrap snippets bootdey">
      <div class="row text-center">
       <div class="col-sm-12 col-md-12 col-md-12">
        <h2 className='text-light'>What I Offer</h2>
        <h2 className='text-white' style={{ "font-size": "60px", "line-height": "60px", "margin-bottom": "20px", "font-weight": "900" }}> How Can I Help You</h2>
        <p>My <span class="highlight">experienced</span> and <span class="highlight">dedication</span>  to provide these services with a smile.</p>
       </div>
      </div>
      <div class="row">
       <div class="col-md-offset-1 col-sm-12 col-md-12">
        <div class="services-list">
         <div class="row">
          <div class="col-sm-6 col-md-4 col-md-4">
           <div class="service-block" style={{ "visibility": "visible" }}>
            <div class="ico fa fa-magic highlight"><FaCode /></div>
            <div class="text-block">
             <div class="name">Front-End Development</div>
             <div class="info">Beauty and function</div>
             <div class="text">Utilizing popular frameworks to streamline development, improve code organization, and enhance the overall performance of web applications. </div>
            </div>
           </div>
          </div>
          <div class="col-sm-6 col-md-4 col-md-4">
           <div class="service-block" style={{ "visibility": "visible" }}>
            <div class="ico fa fa-code highlight"><FaMagic /></div>
            <div class="text-block">
             <div class="name">React/Next Development</div>
             <div class="info">Quality code that lasts</div>
             <div class="text">Building scalable and efficient web applications using the React JavaScript library, known for its component-based architecture.</div>
            </div>
           </div>
          </div>
          <div class="col-sm-6 col-md-4 col-md-4">
           <div class="service-block" style={{ "visibility": "visible" }}>
            <div class="ico fa fa-pencil highlight"><FaPencilAlt /></div>
            <div class="text-block">
             <div class="name">Template & UI Develop</div>
             <div class="info">Words that tell your story</div>
             <div class="text"> Designing the visual elements and layout of a website or application, focusing on user-centric design principles, aesthetics, and brand consistency.</div>
            </div>
           </div>
          </div>
          <div class="col-sm-6 col-md-4 col-md-4">
           <div class="service-block" style={{ "visibility": "visible" }}>
            <div class="ico fa fa-bullhorn highlight"><FaBullhorn /></div>
            <div class="text-block">
             <div class="name">HTML5/CSS3 Development</div>
             <div class="info">Converting users to customers</div>
             <div class="text">Building the structure (HTML5) and styling (CSS3) of web pages to ensure a visually appealing and well-organized interface.</div>
            </div>
           </div>
          </div>
          <div class="col-sm-6 col-md-4 col-md-4">
           <div class="service-block" style={{ "visibility": "visible" }}>
            <div class="ico fa fa-eye highlight"><FaEye /></div>
            <div class="text-block">
             <div class="name">Branding/Identity</div>
             <div class="info">Leave a lasting impression</div>
             <div class="text"> A website serves as the digital face of your brand, providing a centralized and easily accessible platform for customers to learn about your business. A well-designed website contributes to a positive first impression, reinforcing your brand identity.</div>
            </div>
           </div>
          </div>
          <div class="col-sm-6 col-md-4 col-md-4">
           <div class="service-block" style={{ "visibility": "visible" }}>
            <div class="ico fa fa-umbrella highlight"><FaUmbrella /></div>
            <div class="text-block">
             <div class="name">Strategy/Planning</div>
             <div class="info">Thinking beyond tomorrow</div>
             <div class="text">Your website is a key platform for content distribution. By strategically planning and organizing content on your site, you can guide visitors through the customer journey, from awareness to conversion.</div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </section>
   <section className="my-role">
    <div class="container mt-5">
     <h4 className="my-3 text-light text-uppercase">How I Do & My Responsibility</h4>
     <div class="row">
      {rolesData?.map((role) => (
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
 )
}

export default Service
