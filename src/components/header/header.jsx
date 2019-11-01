import React, { Component } from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div >
                <Navbar color="info" light expand="md">
                    <NavbarBrand ><h3>User Management</h3></NavbarBrand>
                </Navbar>  
            </div>
        )
    }
}
