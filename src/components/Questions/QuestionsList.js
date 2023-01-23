import React from "react";
import classes from "./QuestionsList.module.css";


const Questions = (props) => {
    return (
        <div className={classes.Qsection}>
            <h6>{props.mainQ}</h6>
            <button>{props.btn1}</button>
            <button>{props.btn2}</button>
        </div>

    )
}
export default Questions;