  
import React from "react";
import "./GameListStyle.css";

const GameList = props => {
    const { name, image, deck, original_release_date } = props.game;

    return(
    <div className="row">

            {/* original classname used col-sm-10  ----------- but will be output, and one */}
            <div className="output">

                <p>Name: <span>{name}</span></p>
                <p>Intended Release: <span>{original_release_date}</span></p>
                <p>Summary: <span>{deck}</span></p>

            </div>

            <img className="art" src={image.medium_url} alt={name}></img>
            {/* original class name used col-sm-2  ----------- but will be castbox (art), and two */}

    </div>
    )
}

export default GameList;