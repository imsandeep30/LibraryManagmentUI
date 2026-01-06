import "./notifycard.css"
export default function NotifyCard(props){
    const { title, time } = props;
    const matter=`${title} was sold out ${time}`;
    return (
        <div className="notify-card">
            <p>{matter}</p>
        </div>
    )
}
