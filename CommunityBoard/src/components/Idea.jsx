import React from "react";
import Link from "./Link";

const Idea = (props) => {
    return (
        <div className="Idea">
            <img src={props.image} alt={props.title} />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <Link url={props.link}>Learn More</Link>
        </div>
    );
};


export default Idea;