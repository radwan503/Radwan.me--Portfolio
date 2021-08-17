import React from 'react';
import Social from './element/Social';

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
                            <h1>Radwan <span className="bold-color">Ahmed</span> </h1>
                        </div>
                        <div className="designation-list">
                            <ul>
                                <li>Front End Engineer</li>
                                
                            </ul>
                        </div>
                        <div className="resume">
                            <a href="https://github.com/radwan503/Radwan.me--Portfolio/blob/master/src/assets/image/RadwanAnik.pdf" target="_blank" type="file" className="btn btn-lg btn-green text-white" download>Get Resume</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
