import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
    constructor(props) {
        super(props);

        this.landingData = props.landingData;
    }
    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center text-left" id="about">
                <div className="w-100">
                    <h1 className="mb-0">{this.landingData.lastName}
                        <span className="text-primary">{this.landingData.firstName}</span>
                    </h1>
                    <div className="mb-5">
                        <span className="subheading">{this.landingData.phoneNumber} · </span>
                        <a className="h5" href={'mailto:' + this.landingData.email}>{this.landingData.email}</a>
                    </div>
                    <p className="lead mb-5">{this.landingData.bio}</p>
                    <div className="social-icons">
                        <a href={this.landingData.facebook}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href={this.landingData.linkedin}>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href={this.landingData.github}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Landing;
