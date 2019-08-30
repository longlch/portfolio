import React, { Component } from 'react';

class Interests extends Component {
    constructor(props) {
        super(props);

        this.interests = props.interests;
    }

    render() {
        return(
            <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
                <div className="w-100">
                    <h2 className="mb-5">Interests</h2>
                    <p>Good at with activities outdoor.</p>
                    <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and
                        television shows, I am an aspiring chef, and I spend a large amount of my free time exploring
                        the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>

        );
    }
}

export default Interests;
