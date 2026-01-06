import { useState } from "react";
import "./managecard.css";

export default function ManageCard(props) {
  const { title, author, category, year, copies } = props.bookdetails;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="manage-card" onClick={() => setOpen(true)}>
        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>Category: {category}</p>
        <p>Year: {year}</p>
        <p>Copies: {copies}</p>
      </div>

      {open && (
        <div className="card-overlay" onClick={() => setOpen(false)}>
          <div className="expanded-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✕
            </button>

            <h1>{title}</h1>
            <h3>Author: {author}</h3>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Year:</strong> {year}</p>
            <p><strong>Copies:</strong> {copies}</p>

            <p className="extra-text">
              This book is part of the BookSea collection. It is carefully
              maintained by the admin system to ensure accurate inventory,
              proper categorization, and smooth availability for readers.
            </p>

            <button className="dlt-btn">
              delete
            </button>
          </div>
        </div>
      )}
    </>
  );
}
