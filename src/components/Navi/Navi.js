import React, { Component } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    
} from 'reactstrap';

import {Link} from "react-router-dom";


export default class Navi extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
            navCollapsed: true,
            showNavbar: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <div>
          
                <Navbar style={{ backgroundColor: "dodgerblue", color: "white",height:"50px" }} expand="md">
                    
                       
                        <Link id="RouterNavLink" style={{ textDecoration: "none", color: "white" }} to="/">e Commerce</Link>

                    <NavbarToggler />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem >
                                <Link id="RouterNavLink" style={{ textDecoration: "none", color: "white" }} to="testCart">Cart Item </Link>
                            </NavItem> &nbsp;|&nbsp;  
                            <NavItem>
                                    <Link id="RouterNavLink" style={{ textDecoration: "none", color: "white" }} to="">Add Product</Link>                             
                            </NavItem>
                           
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}