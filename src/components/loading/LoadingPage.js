import React from "react";
import './loadingPage.css'

class LoadingPage extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        return (
            <div id='loading-page'
                 className='align-items-center d-flex justify-content-center'>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>

        );
    }
}

export default LoadingPage;
