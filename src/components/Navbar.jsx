import {Link} from "react-router-dom"

const Navbar = ({elements}) => {
    return (
        <div className="nav-bar">
            <img className="logo" src="images/logo.png" alt="Logo" />
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
           
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={"/private/QuestionsPage"}>{element.titulo}</Link>)
               })
           }
        </div>
        </div>
    )
}

export default Navbar
