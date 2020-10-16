import React, { useState, useEffect } from 'react';
import experience from '../data/experience.json';

export default function Experienced() {

    const [experienceData, setExperience] = useState([]);
    useEffect(() => {
        const experienceData = experience.experience;
        setExperience(experienceData);
    }, [experienceData])
    return (
        <section className="experienced section" id="experience">
            <div className="container">
                <div className="section-title-text">
                    <h1 className="dark-color">EXPERIENCE</h1>
                </div>
                <div className="row mb-5">
                    {
                        experienceData.map(infoData => {
                            return (

                                <div className="col-md-4">
                                    <div className="card bg-darkblue experince-card">
                                        <div className="card-body">
                                            <p class="card-text">{infoData.year}</p>
                                            <h5 class="card-title text-white ">{infoData.companyName}</h5>
                                            <ul>
                                                <li>{infoData.role1}</li>
                                                <li>{infoData.role2}</li>
                                                <li>{infoData.role3}</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}
