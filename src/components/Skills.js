import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {faHtml5, faGithub, faCss3, faJava, faJs, faReact, faNodeJs, faAngular} from "@fortawesome/free-brands-svg-icons";



class Skills extends Component {
    constructor(props) {
        super(props);
        this.skills = props.skills;
    }

    showIcon(iconName){
        console.log('icon name', iconName);
        switch (iconName) {
            case "html5": return faHtml5;
            case "css3": return faCss3;
            case "java": return faJava;
            case "js": return faJs;
            case "react": return faReact;
            case "node-js": return faNodeJs;
            case "angular": return faAngular;
            case "github": return faGithub;
        }
    }


    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
                <div className="w-100">
                    <h2 className="mb-5">Skills</h2>

                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">

                        {this.skills.map((s, i) => {
                            return (
                                <li key={i} className="list-inline-item pointer-event">
                                    <i>
                                        <FontAwesomeIcon style={{cursor: 'pointer'}} icon={this.showIcon(s.iconName)}/>
                                    </i>
                                </li>

                            );
                        })}

                    </ul>

                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Cross Browser Testing &amp; Debugging
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Cross Functional Teams
                        </li>
                        <li>
                            <i className="fa-li fa fa-check"></i>
                            Agile Development &amp; Scrum
                        </li>
                    </ul>
                </div>
            </section>

        );
    }
}

export default Skills;
