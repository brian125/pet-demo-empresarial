import React, { useState } from 'react'
import { app, google } from "../../service/firebase"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch , useSelector  } from "react-redux"
import {loginAction ,loggedAction} from "../../actions/AuthorActions"
import PrivateLayout from '../../layout/PrivateLayout'
import { Login } from './Login'


const HomePage = () => {
    
    const state = useSelector(state=>state)
    const dispatch = useDispatch()

    const [ usuario, setUsuario ] = useState(null);

    const navigate=useNavigate()

    const handler=()=>{
        app.auth().signInWithPopup(google)
        .then(user =>{
             dispatch(loginAction(user.user.multiFactor.user.email , 
                user.user.multiFactor.user.displayName,
                user.user.multiFactor.user.uid,
                user.user.multiFactor.user.photoURL))
                navigate("/private/QuestionsPage")    
        })
        .catch()
    }

      
    useEffect(()=>{
        app.auth().onAuthStateChanged((user)=>{
        if(user){
            dispatch(loggedAction(user.multiFactor.user.email , 
                user.multiFactor.user.displayName,
                user.multiFactor.user.uid,
                user.multiFactor.user.photoURL))
                navigate("/private/QuestionsPage")
            }
    })},[])


    useEffect(()=>{
        app.auth().onAuthStateChanged((usuarioFirebase) => {
            setUsuario(usuarioFirebase);
        })
    }, []);

    
    return (
        <div className='contenedor2'>
            <h1>Sofka Preguntas Y Respuestas</h1>
            {usuario ? <PrivateLayout/> : <Login setUsuario={setUsuario} />}
            <div className="google">
                <button className="button" onClick={handler}>Iniciar sesión con google</button>
            </div> 
        </div>
    )
}

export default HomePage
