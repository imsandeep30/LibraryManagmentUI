import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
export default function Navbar(){
    const [loggedin, setLoggedin]=useState(true);
    return(
        <div className="navbar">
            <div>
                <img src="../Assets/dolphin.png" alt="dolphin" className="dolphin-image" />
                <p className="logoName">BookSea</p>
            </div>
            
            <div className="links"><Link to="/home" >Home</Link></div>
            <div className="links"><Link to="/manage" >Manage</Link></div>
            <div className="links"><Link to="/contact" >Contact</Link></div>
            <div className="links"><Link to="/settings" >Settings</Link></div>
            {
                loggedin===true && <div className="links login"><Link to="/login" onClick={()=>{
                    localStorage.removeItem("loggedinuser");
                }}>Logout</Link></div> 
            }
            
        </div>
    )
}