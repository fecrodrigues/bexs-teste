import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';

//Carregandos estilos da navbar
import './navbar.css';

class PageNavbar extends Component {

    //Logotipo da navbar
    img = <img src="/images/logo.png" alt="logo"/>;

    render() {
        return (
            //Navbar
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