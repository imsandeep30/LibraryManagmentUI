import { useState } from "react";
import "./addingcard.css";
export default function Addingcard({sendData}){
    const [open,setOpen]=useState(false);
    
    return(
        <div className="card-overlay">

            <div className="expanded-card">
                <button className="close-btn" onClick={() => sendData(true)}>
                    ✕
                </button>
                <h2>Add Book Here</h2>
                <form action="">
                    <label htmlFor="bookName">Book Name</label>
                    <input type="text" name="bookName" required />
                    <label htmlFor="Author">Author Name</label>
                    <input type="text" name="Author" required />
                    <label htmlFor="category">Category</label>
                    <input type="text" name="category" required />
                    <label htmlFor="copies">Copies</label>
                    <input type="text" name="copies" required />
                    <label htmlFor="year">Year</label>
                    <input type="text" name="year" required />
                    <label htmlFor="availble">Availble</label>
                    <select name="availble" id="availble">
                        <option value="true">Availble</option>
                        <option value="false">Not Availble</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}