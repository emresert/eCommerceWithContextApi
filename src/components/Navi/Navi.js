import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';


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
                <Navbar style={{ backgroundColor: "#ff8d01", color: "white" }} expand="md">
                    <NavbarBrand >
                        <Link style={{ textDecoration: "none", color: "white" }} to="/Home">e-commerce</Link>
                    </NavbarBrand>
                    <NavbarToggler />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>

                            <NavItem >
                                <NavLink >Cart Item </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink >
                                    <Link style={{ textDecoration: "none", color: "white" }} to="/saveproduct">Add Product</Link>
                                </NavLink>
                            </NavItem>
                           
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}