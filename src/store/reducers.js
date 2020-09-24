import {combineReducers} from "redux";
import {signReducer} from "./sign/reducers"

export default combineReducers({
    sign: signReducer
})