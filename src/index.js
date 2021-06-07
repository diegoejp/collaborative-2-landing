import React from "react";
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar.js'
import Jumbotron from './jumbotron'
import Card from "./Cards";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

const App = (()=>{
    return(
        <>
        {/* Aca los componentes*/}
        <Navbar/>
        <div className="container">
            <Jumbotron/>
            <div className="row">{/*Este div para almacenar las cartas*/}
                <Card text = "Esta es la primera carta" tittle="Carta 1" imgUrl="" link="" textLink="Vamos"/>
                <Card text = "Hola"/>
                <Card text = "Hola"/>
                <Card text = "Hola"/>
            </div>
            
        </div>
        </>
    )
});

ReactDOM.render(<App/>,document.querySelector("#root"));
