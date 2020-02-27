import React, {Component} from 'react';

class Experience extends Component {
    constructor(props) {
        super(props);

        this.experience = props.experience;
    }

    render() {
        return (
            <section className="resume-section p-3 p-lg-5 d-flex justify-content-center align-items-center text-left" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Full stack Developer</h3>
                            <div className="subheading mb-3">Axon Active</div>
                            <p>Analyze business process based on the idea from customer. Work with Maven, Spring framework on server side and modern JS framework client side.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Jun 2019 - Present</span>
                        </div>
                    </div>

                    <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="resume-content">
                            <h3 className="mb-0">Web Developer</h3>
                            <div className="subheading mb-3">Enclave</div>
                            <p>Enclave is an ODC environment, I have the opportunity to work directly with client oversea to get user requirement, analyze and build products.
                                Besides that, I'm also an Android mentor who support newcomers for quickly adapt to everything related to Java, Android, Coding style and Teamwork process.</p>
                        </div>
                        <div className="resume-date text-md-right">
                            <span className="text-primary">Jul 2017 - May 2019</span>
                        </div>
                    </div>

                </div>
            </section>

        );
    }
}

export default Experience;
