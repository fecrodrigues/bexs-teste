import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';


class PageNavbar extends Component {

    img = <img src="/images/logo.png" alt="logo"/>;

    render() {
        return (
            <Navbar brand={this.img} className="white nav"  alignLinks="right">
                <NavItem href="" className="nav-item"></NavItem>
                <NavItem href="" className="nav-item"></NavItem>
                <NavItem href="" className="nav-item"></NavItem>
                <NavItem href="" className="nav-item"></NavItem>
                <NavItem href="" className="nav-item"></NavItem>
            </Navbar>
        )
    }

}

export default PageNavbar;