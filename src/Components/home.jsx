import React from "react";
import Navbar from "./navbar";
import { Aboutinfo } from "./Details/aboutdetauls";
import "./home.css";
import Leftsec from "./Cards/leftsec";
import NotifyCard from "./Cards/notifycard";
import { Notifications } from "./Details/fakenotification";
import Hero from "./hero";
export default function Home(){
    const loggedinuser=JSON.parse(localStorage.getItem("loggedinuser"));
    console.log(loggedinuser);
    return (

        <>
            <Navbar />
            <div className="Welcome">
                <h1>👋 Welcome back, {loggedinuser?.fullname}!</h1>
                <p>Ready to see your sales now?</p>
            </div>
            <div className="home-content">
                <div className="left-section">
                    <h2 id="heading">BookSea History</h2>
                    {
                        Aboutinfo.map((x,index)=>{
                            return (
                                <Leftsec key={index} imageUrl={x.imageurl} content ={x.content} num={x.num}/>
                            );
                        })
                    }
                </div>
                <div className="right-section">
                    <h1>Recent Notification</h1>
                    {
                        Notifications.map((notify,index)=>{
                            return (<NotifyCard key={index} title={notify.BookTitle} time={notify.Time}/>);
                        })
                    }
                </div>
            </div>
        </>
    );
}