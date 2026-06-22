import React from "react";
import { Link } from "react-router-dom"
import "../styles/Review.css"
function Review({review}){
    return <div className="review-container">
        <h2 className="review-title">{review.title}</h2>
        <h3 className="review-author">{review.author}</h3>
        <h4 className="review-created_at">{review.created_at}</h4>
        <p className="review-description">{review.description}</p>
    </div>
}

export default Review