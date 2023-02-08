import React from "react";
import classes from "../TestList/Result.module.css";
import QuestionsList from "../TestList/QuestionsList";


const Result = (props) => {

    const showStartPage = () => {
        window.location.href = '/main';
    }
    const { setResultmbti } = props;
    return (

        <div className={classes.Mainbox}>
            <div className={classes.ad}>
                광고삽입
            </div>
            <img className={classes.img} id="result-img1" src="https://images.unsplash.com/photo-1674071498147-ce8c7c59874c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="result-img" />
            <div>{setResultmbti}</div>
            <div className={classes.boxarea}>
                <button className={classes.kakao}>카카오톡으로 링크 공유</button>
                <button className={classes.again} onClick={showStartPage}>테스트 다시하기</button>
                {/* 추후 공유 링크 & 아이콘 삽입 예정 */}
            </div>
        </div>


    );
}

export default Result;