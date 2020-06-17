  
import React from "react";
import "./EmployeeListStyle.css";

const EmployeeList = props => {
    const { name, image, deck, original_release_date } = props.employee;

    return(
    <div className="row">
        <div className="gameBox">

            <div className="col-sm-10">

                <p>Name: <span>{name}</span></p>
                <p>Intended Release: <span>{original_release_date}</span></p>
                <p>Summary: <span>{deck}</span></p>

            </div>

            <img className="col-sm-2" src={image.medium_url} alt={name}></img>

        </div>
    </div>
    )
}

export default EmployeeList;