import {Link} from "react-router-dom"

const Navbar = ({elements}) => {
    return (
        <div className="nav-bar">
            <img className="logo" src="/images/logo.png" alt="Logo" />
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={"/private/QuestionsPage"}>{element.titulo}</Link>)
               })
           }
        </div>
    )
}

export default Navbar
