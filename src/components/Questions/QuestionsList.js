import React, { useCallback, useState } from "react";
import classes from "./QuestionsList.module.css";
import { questionLists } from "../Question/QuestionDummy";

const Questions = ({ ...props }) => {
    const [question, setQuestion] = useState(0);
    const [answer, setAnswer] = useState([]);



    const showNextQuestion = useCallback((e) => {
        const value = e.target.value;
        setAnswer(prev => [...prev, value])
        setQuestion(prev => prev + 1)
    }, [])
    return (
        <div className={classes.Qsection}>
            <h6>{questionLists[question].question}</h6>
            <button onClick={showNextQuestion}
                value={questionLists[question].selection[0].value}>
                {questionLists[question].selection[0].answer}</button>
            <button onClick={showNextQuestion}
                value={questionLists[question].selection[0].value}>
                {questionLists[question].selection[1].answer}</button>

        </div>

    )
}
export default Questions;