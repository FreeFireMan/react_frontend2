import {useState} from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export function Sign(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className='ml-2' variant="primary" onClick={handleShow}>
                {props.label}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Login</label>
                            <input
                                type="text"
                                className="form-control"
                                id="login"
                                placeholder="Login">
                                value={props.login}
                            </input>
                        </div>
                        {props.type === 'Register' &&
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Email">
                                value={props.email}
                            </input>
                        </div>
                        }
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="password"
                                placeholder="Password">
                                value={props.password}
                            </input>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <button type="button" className="btn btn-success ">Success</button>
                            <br/>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

