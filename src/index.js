import React from "react";
import ReactDOM from "react-dom"
import Card from "./Cards";
import "bootstrap/dist/css/bootstrap.css"

const App = (()=>{
    return(
        <>
        {/* Aca los componentes*/}
        <div className="container">

            <Card/>
        </div>

        
        </>
    )
});

ReactDOM.render(<App/>,document.querySelector("#root"));
