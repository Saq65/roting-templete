import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Temp } from "./templete";
import { Todo } from "../Todolist/todolist";
import FomikDemo2 from "../../Formik-demo/formikForm-validation";
import { Netflix } from "../../netflix/netflix-index";

export function Main(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Temp/>} />
                <Route path="/todo" element={<Todo/>} />
                <Route path="/formik" element={<FomikDemo2/>} />
                <Route path="/netflix" element={<Netflix/>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}