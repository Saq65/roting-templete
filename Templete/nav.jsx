import { useNavigate } from "react-router-dom"
import './temlete.css'

export function Nav(){
    const navigate = useNavigate()
    function Clik(){
          navigate("/todo")
    }
    const navigate2 = useNavigate()
    function Clik2(){
          navigate2("/formik")
    }
    const navigate3 = useNavigate()
    function Clik3(){
          navigate3("/netflix")
    }
   
    return(
        <div className="container-fluid">
           <nav id="nav" className="bg-dark text-light  mb-2 p-1">
            <ul id="bl" className="d-flex justify-content-around mt-2">
                <li className="btn btn-light">Home</li>
                <li onClick={Clik} className="btn btn-light">Todo List</li>
                <li  onClick={Clik3} className="btn btn-light">Netflix</li>
                <li onClick={Clik2} className="btn btn-light">Formik-Form</li>
            </ul>
           </nav>
        </div>
    )
}