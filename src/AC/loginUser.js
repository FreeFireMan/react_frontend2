
function loginUser(userObject){
    return {type: 'LOGIN_USER',
    payload: userObject
    }
}
export default loginUser