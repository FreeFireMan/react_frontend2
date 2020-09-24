import React from "react";
import {Sign} from "./Sign"
import {connect} from "react-redux";
import {setConfirmPassword, setEmail, setLogin, setPassword, setPhone} from "../store/sign/actions";


function SignContainer(props) {
    return (
        <Sign setLogin={props.setLogin}
              setPassword={props.setPassword()}
              setConfirmPassword={props.setConfirmPassword()}
              setEmail={props.setEmail()}
              setPhone={props.setPhone()}

              login={props.login}
              password={props.password}
              confirmPassword={props.confirmPassword}
              email={props.email}
              phone={props.phone}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        login: state.sign.login,
        password: state.sign.password,
        confirmPassword: state.sign.confirmPassword,
        email: state.sign.email,
        phone: state.sign.phone
    }
}
const mapDispatchToProps = {
    setLogin,
    setPassword,
    setConfirmPassword,
    setEmail,
    setPhone
}

export default connect(mapStateToProps, mapDispatchToProps)(SignContainer)
