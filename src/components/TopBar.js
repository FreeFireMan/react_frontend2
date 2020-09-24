import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form'
import {Sign} from "./Sign";

function TopBar() {
    const isAuth = localStorage.getItem('token')
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Shop</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form>
                {isAuth || <Sign label={'sign in'}/>}
                {isAuth || <Sign label={'sign up'}/>}
                {isAuth && <Sign label={'sign out'}/>}
            </Form>
        </Navbar>
    )
}

export default TopBar