import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Landing from "./Landing";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Interests from "./Interests";
import profileData from "../../profileData";
import './portfolio.css'

class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            landingData: profileData.landing,
            experience: profileData.experience,
            education: profileData.education,
            skills: profileData.skills,
            interests: profileData.interests,
            awards: profileData.awards
        }
    }

    render() {
        return(
            <div id='landing-page' className="App text-left">
                <Sidebar sidebarData={this.state.landingData}></Sidebar>
                <div className="container-fluid p-0">
                    <Landing landingData={this.state.landingData} />
                    <hr className="m-0" />
                    <Experience experience={this.state.experience} />
                    <hr className="m-0" />
                    <Education education={this.state.education}/>
                    <hr className="m-0" />
                    <Skills skills={this.state.skills} />
                    <hr className="m-0" />
                    <Interests interests={this.state.interests} />
                    <hr className="m-0" />
                    {/*<Awards awards={this.state.awards} />*/}
                </div>
            </div>
        );
    }

}

export default Portfolio;
