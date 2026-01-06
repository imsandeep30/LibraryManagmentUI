import { Link } from "react-router-dom";
import "./content.css";
export default function Content(){
    return (
        <div className="content">
                <img src="../Assets/dolphin.png" alt="dolphin" id="dolphin-image"/>
                <h1>Welcome to BookSea</h1>
                <p>Dive into the ocean of books and explore endless adventures!</p>
                <Link className="explore-button" to="/home">Explore Now</Link>
        </div>
    );
}