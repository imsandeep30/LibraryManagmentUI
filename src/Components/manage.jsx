import Navbar from "./navbar";
import ManageCard from "./Cards/managecard";
import { fakebooks } from "./Details/fakebooks";
import { useEffect, useState } from "react";
import "./manage.css";
import Addingcard from "./Cards/addingcard";
export default function Manage(){
    const [search,setSearch]=useState("");
    const [books,setBooks]=useState(fakebooks);
    const [mngCard,setMngCrd]=useState(false);
    const getDataFromChild=(childData)=>{
        setMngCrd(!childData);
        console.log(mngCard);
    }
    console.log(mngCard);
    useEffect(()=>{
        const timer=setTimeout(()=>{
            const booksfiltering = fakebooks.filter((book)=>{
                return(
                    book.title.toLowerCase().includes(search.toLowerCase()) ||
                    book.author.toLowerCase().includes(search.toLowerCase()) ||
                    book.category.toLowerCase().includes(search.toLowerCase())
                );
            })
            setBooks(booksfiltering);
        },1000);
        return () => clearTimeout(timer);
    }, [search]);
    
    return (
        <>
            <Navbar />
            <div className="manage-topbar">
                    <input
                    type="text"
                    placeholder="Search by title, author, category..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                    />
                    <button className="manage-btn" onClick={()=>setMngCrd(!mngCard)}>+ Manage</button>
                    
            </div>
            {
                
                mngCard===true ? <Addingcard sendData={getDataFromChild} /> : <></>
            }
            {
                books.map(x=>{
                    return(
                        <ManageCard key={x.id}  bookdetails={x} />
                    )
                })
            }
        </>
    )
}