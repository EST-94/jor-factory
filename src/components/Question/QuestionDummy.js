import classes from "./QuestionDummy.module.css"
import React from "react";
import Questions from "../Questions/QuestionsList";
import Card from "../../UI/Card";

export const questionLists = [
    {
        id: '0',
        question: 'E/I질문1',
        selection: [
            { answer: '새로운 사람들과 친해지려고 노력한다', value: 'e' },
            { answer: '아는 사람과 깊게 친해지려고 노력한다', value: 'i' }
        ]
    },
    {
        id: '1',
        question: 'E/I질문2',
        selection: [
            { answer: '새로운 사람들과 친해지려고 노력한다', value: 'e' },
            { answer: '아는 사람과 깊게 친해지려고 노력한다', value: 'i' }
        ]
    },
    {
        id: '2',
        question: 'E/I질문3',
        selection: [
            { answer: '새로운 사람들과 친해지려고 노력한다', value: 'e' },
            { answer: '아는 사람과 깊게 친해지려고 노력한다', value: 'i' }
        ]
    },
    {
        id: '3',
        question: 's/n질문1',
        selection: [
            { answer: '새로운 사람들과 친해지려고 노력한다', value: 's' },
            { answer: '아는 사람과 깊게 친해지려고 노력한다', value: 'n' }
        ]
    },
    {
        id: '4',
        question: 's/n질문2',
        selection: [
            { answer: '새로운 사람들과 친해지려고 노력한다', value: 's' },
            { answer: '아는 사람과 깊게 친해지려고 노력한다', value: 'n' }
        ]
    },
]
