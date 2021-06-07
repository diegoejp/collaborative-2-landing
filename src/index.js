import React from "react";
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar.js'
import Jumbotron from './jumbotron'
import Card from "./Cards";

const App = (()=>{
    return(
        <>
        {/* Aca los componentes*/}
        <Navbar/>
        <div className="container">
            <Jumbotron/>
            <Card/>
        </div>

        
        </>
    )
});

ReactDOM.render(<App/>,document.querySelector("#root"));
