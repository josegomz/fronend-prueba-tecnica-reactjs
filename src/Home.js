import React,{Fragment} from "react";
import Navbar from "./Components/Navbar";

function Home(){
    return(
        <Fragment>
            <Navbar brand="Prueba técnica - App" />
            <div className="container">
                <br></br><br></br>
                <h1 style={{textAlign: 'center'}}>Bienvenido</h1>
            </div>
        </Fragment>
    )
}
export default Home;