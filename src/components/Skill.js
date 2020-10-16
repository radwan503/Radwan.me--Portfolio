import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap'
import SkillData from '../data/skill.json';

export default function Skill() {

    const [skill, setSkill] = useState([])
    const [programming, setProgramming] = useState([])
    const [tool, setTool] = useState([])

    useEffect(() => {
        const skill = SkillData.Web;
        const programming = SkillData.Programming;
        const tool = SkillData.Tools;
        setSkill(skill);
        setProgramming(programming);
        setTool(tool);

    }, [skill, programming,tool])
    return (
        <section className="skill section" id="skill">
            <div className="container">
                <div className="section-title-text mb-5">
                    <h1 className="dark-color">MY Skill</h1>
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

                                                    <ProgressBar className="bg-dark" animated  variant="success" style={{ height: "1px" }} now={skillInfo.percent} />

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div class="tab-pane fade" id="pills-programming" role="tabpanel" aria-labelledby="pills-programming-tab">
                        <div className="row">

                            {
                                programming.map(programmingInfo => {
                                    return (
                                        <div className="col-md-4">
                                            <div class="card bg-darkblue mb-5">
                                                <div class="card-body">
                                                    <div className="progress-header clearfix">
                                                        <h5 class="card-title float-left">{programmingInfo.name}</h5>
                                                        <h6 class="card-title float-right">{programmingInfo.percent}%</h6>
                                                    </div>

                                                    <ProgressBar className="bg-dark" animated  variant="success" style={{ height: "1px" }} now={programmingInfo.percent} />

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div class="tab-pane fade" id="pills-tool" role="tabpanel" aria-labelledby="pills-tool-tab">

                        <div className="row">

                            {
                                tool.map(toolInfo => {
                                    return (
                                        <div className="col-md-4">
                                            <div class="card bg-darkblue mb-5">
                                                <div class="card-body">
                                                    <div className="progress-header clearfix">
                                                        <h5 class="card-title float-left">{toolInfo.name}</h5>
                                                        <h6 class="card-title float-right">{toolInfo.percent}%</h6>
                                                    </div>

                                                    <ProgressBar className="bg-dark" animated  variant="success" style={{ height: "1px" }} now={toolInfo.percent} />

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
