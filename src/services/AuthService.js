import {auth} from '../firebase';
import toastr from 'toastr';

/**
 * Metodo para crear cuenta
 * @param {String} email Email usuario a crear
 * @param {String} password Contraseña del usuario a crear
 */
export const createAccount = (email, password, callback) => {
    auth.createUserWithEmailAndPassword(email, password).then((user) => {
        toastr.success("Cuenta creada con exito");
        user.user.sendEmailVerification().then(() => {
            toastr.info("Se te ha enviado un correo para verificar tu cuenta");
        }, function (error) {
            toastr.error("Algo salio mal al enviar correo de verificacion");
            console.log(error);
        });
        callback(user.user.uid);
    },
    function (rejected) {
        toastr.error("Error al registrarse");
        console.log(rejected);
    });
}

/**
 * Metodo para iniciar sesion
 * @param {String} email Email del usuario que inicia sesion
 * @param {String} password Contraseña del usuario que inicia sesion
 */
export const signIn = (email, password) => {
    auth.signInWithEmailAndPassword(email, password).then((user) => {
        toastr.success("Bienvenido de nuevo "+ user.user.displayName);
    },
    function (rejected) {
        toastr.error("Error");
        console.log(rejected);
    });
}