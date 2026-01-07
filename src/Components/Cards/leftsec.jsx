import "./leftsec.css";

export default function Leftsec(props){
    return (
        props.num % 2 === 0 ? (
            <div className="left-box">
                <div className="image-wrapper">
                    <img src={props.imageUrl} alt="library" className="left-image" />
                </div>
                <p>{props.content}</p>
            </div>
        ) : (
            <div className="right-box">
                <p>{props.content}</p>
                <div className="image-wrapper">
                    <img src={props.imageUrl} alt="library" className="left-image" />
                </div>
            </div>
        )
    );
}
