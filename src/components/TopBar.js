import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form'
import ModalWindow from "./ModalWindow";

function TopBar() {
    const isAuth = localStorage.getItem('token')
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Shop</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form>
                {isAuth || <ModalWindow label={'Sign in'}/>}
                {isAuth || <ModalWindow label={'Sign up'}/>}
                {isAuth && <ModalWindow label={'Sign out'}/>}
            </Form>
        </Navbar>
    )
}

export default TopBar