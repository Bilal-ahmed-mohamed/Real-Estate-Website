import { UseAuthContext } from "./UseAuthContext";


export const UseLogout = () => {
    const {dispatch} = UseAuthContext();

    const logout = () => {
        // remove user from local storage 
        localStorage.removeItem('user')

        // dispach log out
        dispatch({type:'LOGOUT'})
    }

    return {logout}
}