import React, {Component} from 'react';

class Copyright extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="copyright py-4 text-center text-white">
                <div className="container">
                    <small>Copyright &copy; Your Website 2019</small>
                </div>
            </section>
        );
    }

}

export default Copyright;
