import React, {Component} from 'react';
import Navigation from "../navigation/Navigation";
import MastHead from "../masthead/MastHead";
import Contact from "../contact/Contact";
import About from "../about/About";
import PortfolioSection from "../portfolio-section/PortfolioSection";
import Footer from "../footer/Footer";
import Copyright from "../copyright/Copyright";
import './Home.css';
import LoadingPage from "../loading/LoadingPage";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => res.json())
            .then(result => {
                console.log('result', result);
                this.setState({
                    isLoading: false
                })

            }, error => {
                console.log('error', error);
                this.setState({
                    isLoading: false
                })
            })
    }

    render() {
        let {isLoading} = this.state;

        return (
            <div id='home-page'>
                {isLoading && <LoadingPage/>}
                <Navigation></Navigation>
                <MastHead></MastHead>
                <PortfolioSection></PortfolioSection>
                <About></About>
                <Contact></Contact>
                <Footer></Footer>
                <Copyright></Copyright>
            </div>
        );
    }

}

export default Home;
