import "./leftsec.css";
export default function Leftsec(props){
    console.log(props.num)
    return (
        props.num%2===0?(
            <div className="left-box">
                <img src={props.imageUrl} alt="library" className="left-image" />
                <p>{props.content}</p>
            </div>
        ):
        (
            <div className="right-box">
                <p>{props.content}</p>
                <img src={props.imageUrl} alt="library" className="left-image" />
                
            </div>
        )
    );
}