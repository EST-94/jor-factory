import React, { useCallback, useState } from "react";
import classes from "./QuestionsList.module.css";
import { questionLists } from "../Question/QuestionDummy";

const Questions = ({ ...props }) => {
    const [question, setQuestion] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [storevalue1, setStorevalue1] = useState(0);
    const [storevalue2, setStorevalue2] = useState(0);
    const [storevalue3, setStorevalue3] = useState(0);
    const [storevalue4, setStorevalue4] = useState(0);



    const showNextQuestion = useCallback((e) => {
        const value = e.target.value;
        setAnswer(prev => [...prev, value])
        setQuestion(prev => prev + 1)
        if (value === "e") {
            setStorevalue1(prev => prev + 1);
        }
        if (value === "s") {
            setStorevalue2(prev => prev + 1);
        }
        if (value === "f") {
            setStorevalue3(prev => prev + 1);
        }
        if (value === "p") {
            setStorevalue4(prev => prev + 1);
        }
    }, [],
    )



    // if (!props[question]) return ShowResult();

    return (
        <div className={classes.Qsection}>
            <h6>{questionLists[question].question}</h6>
            <button onClick={showNextQuestion}
                value={questionLists[question].selection[0].value}>
                {questionLists[question].selection[0].answer}</button>
            <button onClick={showNextQuestion}
                value={questionLists[question].selection[1].value}>
                {questionLists[question].selection[1].answer}</button>

            <div className={classes.hide}>
                {storevalue1}
                {storevalue2}
                {storevalue3}
                {storevalue4}
            </div>

        </div >

    )
}
export default Questions;