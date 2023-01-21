import React, { useState, useEffect } from 'react';
import experience from '../data/experience.json';

export default function Experienced() {

    const [experienceData, setExperience] = useState([]);
    useEffect(() => {
        const experienceData = experience.experience;
        setExperience(experienceData);
    }, [experienceData])
    console.log(experienceData)
    return (
        <section className="experienced section" id="experience">
            <div className="container">
                <div className="section-title-text">
                    <h1 className="dark-color">EXPERIENCE</h1>
                </div>
                <div className="row">
                    {
                        experienceData.map(infoData => {
                            return (

                                <div className="col-md-6">
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
                                        <div className='technology-stack'>
                                            {
                                                infoData.techStack?.map(a=>{
                                                    return(
                                                        <>
                                                        <p className='stack1'>{a.stack1}</p>
                                                        <p className='stack2'>{a.stack2}</p>
                                                        <p className='stack3'>{a.stack3}</p>
                                                        <p className='stack4'>{a.stack4}</p>
                                                        <p className='stack5'>{a.stack5}</p>
                                                        </>
                                                    )
                                                })
                                            }
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
