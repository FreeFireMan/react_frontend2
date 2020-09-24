export const SIGN_CHANGE_LOGIN = 'SIGN_CHANGE_LOGIN'
export const SIGN_CHANGE_PASSWORD = 'SIGN_CHANGE_PASSWORD'
export const SIGN_CHANGE_CONFIRM_PASSWORD = 'SIGN_CHANGE_CONFIRM_PASSWORD'
export const SIGN_CHANGE_EMAIL = 'SIGN_CHANGE_EMAIL'
export const SIGN_CHANGE_PHONE = 'SIGN_CHANGE_PHONE'

export const setLogin=(login)=>({
    type: SIGN_CHANGE_LOGIN,
    payload: login
})

export const setPassword=(password)=>({
    type: SIGN_CHANGE_PASSWORD,
    payload: password
})

export const setConfirmPassword=(confirmPassword)=>({
    type: SIGN_CHANGE_CONFIRM_PASSWORD,
    payload: confirmPassword
})

export const setEmail=(email)=>({
    type: SIGN_CHANGE_EMAIL,
    payload: email
})

export const setPhone=(phone)=>({
    type: SIGN_CHANGE_PHONE,
    payload: phone
})

