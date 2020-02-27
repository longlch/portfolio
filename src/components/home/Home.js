import React, {Component} from 'react';
import Navigation from "../navigation/Navigation";
import MastHead from "../masthead/MastHead";
import Contact from "../contact/Contact";
import About from "../about/About";
import PortfolioSection from "../portfolio-section/PortfolioSection";
import Footer from "../footer/Footer";
import Copyright from "../copyright/Copyright";
import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Navigation></Navigation>
                <MastHead></MastHead>
                <PortfolioSection></PortfolioSection>
                <About></About>
                <Contact></Contact>
                <Footer></Footer>
                <Copyright></Copyright>
            </React.Fragment>
        );
    }

}

export default Home;
