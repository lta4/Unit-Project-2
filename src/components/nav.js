import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <div className="star">Star Wars Info</div>
            </Link>
            <Link to="/">
                <h1 className="title">Star Wars Universe</h1>
            </Link>    
            <Link to="/why">
                <div className="about">Why am I?</div>
            </Link>
        </div>
    )
}

export default Nav