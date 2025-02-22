import React from 'react'

const Blog = () => {
 return (
  <section className="experienced section" id="blogcontent">
   <div className="container">
    <div className="section-title-text">
     <h1 className="dark-color">Blog <span style={{ fontSize: "10px" }}>Something about i study</span></h1>
    </div>


    <div class="row mb-2">
     <div class="col-md-12">
      <div class=" card bg-darkblue experince-card flex-md-row mb-4 box-shadow h-md-250">
       <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-primary">React Hook</strong>
        <h3 class="mb-0">
         <a class="text-white" href="https://www.notion.so/Mastering-React-Hooks-A-Comprehensive-Guide-c7a8c56229a943239a3ab7941edf7a62">Mastering React Hooks: A Comprehensive Guide</a>
        </h3>
        <div class="mb-1 text-muted">January 22</div>
        <p class="card-text mb-auto">In the realm of modern web development, React has emerged as a dominant force, offering developers a powerful toolkit for building dynamic and interactive user interfaces. One of the key features that has revolutionized the way React applications are built is the introduction of hooks.</p>
        <a href="https://www.notion.so/Mastering-React-Hooks-A-Comprehensive-Guide-c7a8c56229a943239a3ab7941edf7a62">Continue reading</a>
       </div>

      </div>
     </div>
     <div class="col-md-12">
      <div class="card bg-darkblue experince-card flex-md-row mb-4 box-shadow h-md-250">
       <div class="card-body d-flex flex-column align-items-start">
        <strong class="d-inline-block mb-2 text-success">Context API</strong>
        <h3 class="mb-0">
         <a class="text-white" href="https://www.notion.so/Exploring-React-Context-API-Simplifying-State-Management-86f705a67e684e7888a9f47585a246c6">Exploring React Context API: Simplifying State Management</a>
        </h3>
        <div class="mb-1 text-muted">January 15</div>
        <p class="card-text mb-auto">In the realm of React development, efficiently managing state across components is a common challenge. While props drilling and component hierarchies can work, they often lead to code that's hard to maintain and understand.</p>
        <a href="https://www.notion.so/Exploring-React-Context-API-Simplifying-State-Management-86f705a67e684e7888a9f47585a246c6">Continue reading</a>
       </div>

      </div>
     </div>
    </div>
    <a className='btn btn-primary' href="https://www.notion.so/Front-End-Engineer-bc71063068f04e5eaf851293b35b864e">Read More Article</a>
   </div>
  </section>
 )
}

export default Blog