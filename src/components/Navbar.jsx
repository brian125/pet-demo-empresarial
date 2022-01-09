import {Link} from "react-router-dom"
import { app } from "../service/firebase"
import { useNavigate } from "react-router-dom"
import {  useDispatch ,useSelector  } from "react-redux"
import {logoutAction} from "../actions/AuthorActions"

const Navbar = ({elements}) => {
    
    const state = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate=useNavigate()

    const handler=()=>{
        app.auth().signOut()
        dispatch(logoutAction())
        navigate("/")
    }

    
    return (
        <div className="nav-bar">
            <img className="logo" src="/images/logo.png" alt="Logo" />
            {state.user ? 
                <button className="button-nav btn-sesion" onClick={handler}>Cerrar sesión</button>
            : null}

        </div>
    )
}

export default Navbar
