import React from "react";
import ReactDOM from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './navbar.js'

const App = (()=>{
    return(
        <>
        {/* Aca los componentes*/}
        <Navbar/>
        <h1>Probando </h1>
        

        
        </>
    )
});

ReactDOM.render(<App/>,document.querySelector("#root"));
