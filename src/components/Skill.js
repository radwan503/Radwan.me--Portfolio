import React, { useState, useEffect } from 'react';
import SkillData from '../data/skill.json';

export default function Skill() {

    const [skill, setSkill] = useState([])
    useEffect(() => {
        const skill = SkillData.Web;
        setSkill(skill)
    }, [skill])
    return (
        <section className="skill section">
            <div className="container">
            <div className="section-title-text">
                    <h1 className="dark-color">Skill</h1>
            </div>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="pills-web-tab" data-toggle="pill" href="#pills-web" role="tab" aria-controls="pills-web" aria-selected="true">Web</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-programming-tab" data-toggle="pill" href="#pills-programming" role="tab" aria-controls="pills-programming" aria-selected="false">Programming</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="pills-tool-tab" data-toggle="pill" href="#pills-tool" role="tab" aria-controls="pills-tool" aria-selected="false">Tool</a>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-web" role="tabpanel" aria-labelledby="pills-web-tab">
                        <div className="row">

                            {
                                skill.map(skillInfo => {
                                    return (
                                        <div className="col-md-4">
                                            <div class="card bg-darkblue mb-5">
                                                <div class="card-body">
                                                    <div className="progress-header clearfix">
                                                        <h5 class="card-title float-left">{skillInfo.name}</h5>
                                                        <h6 class="card-title float-right">{skillInfo.percent}%</h6>
                                                    </div>
                                    
                                                    <div class="progress bg-dark" style={{ height: "1px" }}>
                                                        <div class="progress-bar bg-white" role="progressbar" style={{ width: ""}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                     
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div class="tab-pane fade" id="pills-programming" role="tabpanel" aria-labelledby="pills-programming-tab">...</div>
                    <div class="tab-pane fade" id="pills-tool" role="tabpanel" aria-labelledby="pills-tool-tab">...</div>
                </div>

            </div>
        </section>
    )
}
