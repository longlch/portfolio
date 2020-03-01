import React, {Component} from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import blackAvatar from '../../assets/avatar/ava-black-shirt.svg';
import whiteAvatar from '../../assets/avatar/ava-black-shirt-tongue.svg';
import {Link} from 'react-scroll'
import './Navigation.css';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Long Lch',
            navLinks: ['portfolio', 'about', 'contact'],
            isBlackAva: true
        };
    }

    renderNavsLinks = () => {
        return this.state.navLinks.map((item, i) =>  /*[TOLEARN]: List Component*/
            <Link activeClass="active"
                className="nav-item p-2  font-weight-bold text-center"
                to={item}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={500}
                delay={500}
                isDynamic={true}
                offset={-50}
                key={i}
            >
                {item[0].toUpperCase() + item.slice(1)}
            </Link>
        );
    }

    changeIcon = () => {
        this.setState({
            isBlackAva: !this.state.isBlackAva
        });
    }

    render() {
        const {title, isBlackAva} = this.state;

        return (
            <Navbar collapseOnSelect expand="md" bg="less-dark" variant="dark"  sticky="top">
                <div className="container">
                    <Navbar.Brand href="#home" className='d-flex align-items-center'>
                        <img
                            onMouseOver={this.changeIcon} // [TOLEARN]: Call function
                            onMouseOut={()=>this.changeIcon()} // [TOLEARN]: Call function
                            src={isBlackAva ? blackAvatar : whiteAvatar}
                            width="30"
                            height="30"
                        />
                        <span>&nbsp;</span>
                        <span>{title}</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            {this.renderNavsLinks()}
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        );
    }
}

export default Navigation;
