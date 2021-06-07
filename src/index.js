import React from "react";
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar.js'
import Jumbotron from './jumbotron'
import Card from "./Cards";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Footer from "./footer";

const App = (()=>{
    return(
        <>
        {/* Aca los componentes*/}
            <Navbar/>
        <div className="container">
            <Jumbotron/>
            <div className="row">{/*Este div para almacenar las cartas*/}
                <Card text = "Esta es la primera carta" tittle="Carta 1" imgUrl="" link="" textLink="Vamos"/>
                <Card text = "Esta es la segunda carta" tittle="Carta 2" imgUrl="" link="" textLink="Go"/>
                <Card text = "Esta es la tercera carta" tittle="Carta 3" imgUrl="" link="" textLink="Done"/>
                <Card text = "Esta es la cuarta carta" tittle="Carta 4" imgUrl="" link="" textLink="Ready"/>
            </div>
            
        </div>

        <Footer/>    
        
        </>
    )
});

ReactDOM.render(<App/>,document.querySelector("#root"));
