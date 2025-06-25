import Image from "../assets/gzcwaq8uazo41.png";
import { useState } from "react";
import "../css/Card.css"

function Card()
{
    const [ show, setShowState ] = useState(true);
    return(
        <div>
            <button type="button" onClick={() => {setShowState(!show)}}>{show ? "hide" : "show"}</button>
            <div className={`card ${show ? '' : 'hidden'}`}>
                <img src={Image} alt="profile-pic" className="card-pic"></img>
                <h2>Anuj Dangi</h2>
                <p>I am software engineer studing in UOH and my hobbies are gaming, reading.</p>
            </div>
        </div>
    )
}

export default Card;