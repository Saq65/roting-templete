import { React } from "react";
import { Nav } from "./nav";
import { Section } from "./section";
import { Aside } from "./aside";
import { Footer } from "./footer";
import './temlete.css'

export function Temp() {
    return (
        <div id="temp" className="container-fluid">
            <div id="top" className="bg-dark text-light">
                <h1 id="head" className=" p-2">Saqlain Mushtaq</h1>
            </div>
            <div className="row ">
                {<Nav />}
                <div id="sec" className="content d-flex">
                    <div id="sec1"  className="col-8">
                        {<Section />}
                    </div>
                    <div id="aside" className="col-4">
                        {<Aside />}
                    </div>
                </div>
                {<Footer/>}
            </div>
        </div>
    )
}