import { Link } from "react-router-dom";
import "./navbar.css";
export default function Navbar(){
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
        </div>
    )
}