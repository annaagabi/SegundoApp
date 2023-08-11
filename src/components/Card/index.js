import React from "react";
import './card.css';

export default function Card ({title, text, img, link}){
    return(
        <div className="container">
            <p className="card-title">{title}</p>
            <p className="card-text">{text}</p>
            <p className="card-img">{img}</p>
            <p className="card-link">{link}</p>
        </div>
    );
}