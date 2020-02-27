import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);

        this.education = props.education;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
                <div className="w-100">
                    <h2 className="mb-5">Education</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Duy Tan University</h3>
                            <div className="subheading mb-3">Bachelor of Software Engineer</div>
                            <div>Software Engineering</div>
                            <p>GPA: 3.23</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">August 2013 - May 2017</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;
