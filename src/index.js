import React from "react";
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar.js'
import Card from "./Cards";

const App = (()=>{
    return(
        <>
        {/* Aca los componentes*/}
        <div className="container">
            <Navbar/>
            <Card/>
        </div>

        
        </>
    )
});

ReactDOM.render(<App/>,document.querySelector("#root"));
