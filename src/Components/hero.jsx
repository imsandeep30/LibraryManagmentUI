import Content from "./content";import "./hero.css";
export default function Hero(props){
    return (
        <div className="hero">
            <img src="../Assets/sea.png" alt="Sea" id="sea-image"/>
            <Content />
        </div>
    );
}