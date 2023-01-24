import React from "react";
import Questions from "../Questions/QuestionsList";
import Card from "../../UI/Card";
import classes from "./QuestionDummy.module.css";


const DUMMY_Q = [
    {
        id: "Q1",
        mainQ: '집에서 쉬고 있는데 친구가 나오라고 한다면?',
        btn1: '심심해서 나간다',
        btn2: '집에서 쉬는게 좋다',
    },
    {
        id: "Q2",
        mainQ: '쓸데없는 선물주기 하자 내 마음은?',
        btn1: '선물을 떠올림',
        btn2: '쓸데없는걸 굳이..',
    },
    {
        id: "Q3",
        mainQ: '집에서 쉬고 있는데 친구가 나오라고 한다면?',
        btn1: '심심해서 나간다',
        btn2: '집에서 쉬는게 좋다',
    },
    {
        id: "Q4",
        mainQ: '집에서 쉬고 있는데 친구가 나오라고 한다면?',
        btn1: '심심해서 나간다',
        btn2: '집에서 쉬는게 좋다',
    },
];

const Question = () => {
    const questionList = DUMMY_Q.map((Q) => (
        <Questions
            id={Q.id}
            key={Q.id}
            mainQ={Q.mainQ}
            btn1={Q.btn1}
            btn2={Q.btn2}
        />
    ));
    return (
        <section className={classes.QuestionSection}>
            <Card>
                <ul>{questionList}</ul>
            </Card>
        </section>
    )
};

export default Question;
