import React from 'react'
import { useState } from 'react'
import { app } from '../../service/firebase';

export const Login = (props) => {

    const [ isRegistrando, setIsRegistrando ] = useState(false)

    const crearUsuario = (correo, contraseña) => {
        app.auth().createUserWithEmailAndPassword(correo, contraseña)
        .then((usuarioFirebase) => {
            console.log("usuario creado", usuarioFirebase)
            props.setUsuario(usuarioFirebase);
        });
    }

    const iniciarSesion = (correo, contraseña) => {
        app.auth().signInWithEmailAndPassword(correo, contraseña)
        .then((usuarioFirebase) => {
            props.setUsuario(usuarioFirebase);
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const correo = e.target.emailField.value;
        const contraseña = e.target.passwordField.value;

        if(isRegistrando){
            crearUsuario(correo, contraseña);
        }

        if(!isRegistrando){
            iniciarSesion(correo, contraseña);
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler} className='sesion'>
                <h1>{ isRegistrando ? "Regístrate" : "Iniciar Sesión" }</h1>
                <input type="email" id="emailField" placeholder='Correo Electrónico' className="campo"/>
                <input type="password" id="passwordField" placeholder='Contraseña' className="campo" /> 
                <button type='submit' className="sesion-button">
                    {isRegistrando ? "Regístrate" : "Iniciar sesión"}
                </button>
                <button type='submit' onClick={() => setIsRegistrando(!isRegistrando)} className="switch-sesion">
                { isRegistrando 
                    ? "¿Ya tienes cuenta? ¡Inicia sesión!" 
                    : "¿No tienes cuenta? ¡Registrate, es gratis!"
                }
            </button>
            </form>
        </div>
    )
}