import React, { useCallback, useState, useEffect } from "react";
import classes from "./QuestionsList.module.css";
import { questionLists } from "../Question/QuestionDummy";
import { useHistory } from "react-router-dom";


const Questions = ({ ...props }) => {
    const [question, setQuestion] = useState(0);
    const [answer, setAnswer] = useState([]);
    const history = useHistory();
    const [resultmbti, setResultmbti] = useState([]);


    // 버튼 클릭시 다음질문 출력 & mbti값 저장 
    const showNextQuestion = (e) => {
        const value = e.target.value;
        setAnswer(prev => [...prev, value])
        setQuestion(prev => prev + 1)

        const result = answer.reduce(
            (acc, cur, index) => {
                acc[cur] = ++acc[cur]
                if (index === answer.length - 1) {
                    if (acc.i >= acc.e) acc['result'] = acc['result'].concat('i')
                    else acc['result'] = acc['result'].concat('e')

                    if (acc.n >= acc.s) acc['result'] = acc['result'].concat('n')
                    else acc['result'] = acc['result'].concat('s')

                    if (acc.t >= acc.f) acc['result'] = acc['result'].concat('t')
                    else acc['result'] = acc['result'].concat('f')

                    if (acc.p >= acc.j) acc['result'] = acc['result'].concat('p')
                    else acc['result'] = acc['result'].concat('j')
                }
                return acc;
            },
            { i: 0, e: 0, n: 0, s: 0, t: 0, f: 0, p: 0, j: 0, result: '' }
        )
        setResultmbti(result);
    };


    //결과 출력 함수
    const ShowResult = () => {

        history.push(`/result`);
    }

    //질문선택 12개 다 하면 결과창 렌더링
    if (question === 12) return ShowResult();


    return (
        <div className={classes.Qsection}>
            <h6>{questionLists[question].title}</h6>
            <button onClick={showNextQuestion}
                value={questionLists[question].selection[0].value}>
                {questionLists[question].selection[0].answer}</button>
            <button onClick={showNextQuestion}
                value={questionLists[question].selection[1].value}>
                {questionLists[question].selection[1].answer}</button>
            <div className={classes.ad}>
                광고삽입칸
            </div>
            <div>{resultmbti.result}</div>

        </div>

    )
}
export default Questions;