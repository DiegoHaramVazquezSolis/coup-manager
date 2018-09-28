import { auth } from "../../firebase";
import {usersRef} from '../../services/DatabaseService';
import toastr from 'toastr';

export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

export const userChecker = () => (dispatch) => {
    auth.onAuthStateChanged((user) => {
        if(user){
            return dispatch(getProfile(user,dispatch));
        }else {
            return dispatch(getProfile(user, dispatch));
        }
    });
}

/**
 * @param {firebase.User} user 
 * @param dispatch 
 */
function getProfile(user, dispatch) {
    usersRef.child(user.uid).on("value", function(profile) {
        const userProfile = {
            age: profile.val().age,
            alias: profile.val().alias,
            captain: profile.val().captain,
            email: profile.val().email,
            team: profile.val().team,
            foto: profile.val().foto,
            name: profile.val().name,
            number: profile.val().number,
            phone: profile.val().phone,
            position: profile.val().position,
            uid: profile.key
        };
        return dispatch(userLogginSuccess(userProfile));
    });
}

export const logOut = () => (dispatch) => {
    auth.signOut().then(() => {
        dispatch({type: LOGOUT_SUCCESS});
        toastr.success("Hasta pronto");
    },function (error) {
        toastr.error("Error al cerrar sesion");
        console.log(error);
    });
}

function userLogginSuccess(profile) {
    return {
        type: USER_LOGIN_SUCCESS,
        profile
    }
}