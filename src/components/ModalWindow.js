import {useState} from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import loginUser from "../AC/loginUser";
import {connect} from "react-redux";

function ModalWindow(props) {
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
                <Modal.Header closeButton   >
                    <Modal.Title>{props.label}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Login</label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Login">
                            </input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Password</label>
                            <input
                                type="text"
                                className="form-control"
                                id="formGroupExampleInput"
                                placeholder="Password">
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

const mapDispatchToProps = dispatch => ({
    loginUser: userInfo =>
        dispatch(loginUser(userInfo))
})
export default connect(null, mapDispatchToProps)(ModalWindow)
