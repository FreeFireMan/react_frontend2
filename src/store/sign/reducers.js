import {
    SIGN_CHANGE_CONFIRM_PASSWORD,
    SIGN_CHANGE_EMAIL,
    SIGN_CHANGE_LOGIN,
    SIGN_CHANGE_PASSWORD,
    SIGN_CHANGE_PHONE
} from './actions'
const defaultState = {
    login: '',
    password: '',
    confirmPassword: '',
    email: '',
    phone: ''
}

export const signReducer = (state=defaultState  , action) => {
    switch (action.type) {
        case SIGN_CHANGE_LOGIN:
            return {
                ...state,
                login: action.payload
            }
        case SIGN_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
        case SIGN_CHANGE_CONFIRM_PASSWORD:
            return {
                ...state,
                confirmPassword: action.payload
            }
        case SIGN_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        case SIGN_CHANGE_PHONE:
            return {
                ...state,
                phone: action.payload
            }
    }
    return state
}