import React from "react";
// import { Link } from "react-router-dom";
import { MainBox, MainButton } from "./styles";


const Main = () => {

    const onClickBtn = (e) => {
        window.location.href = '/test1';
    }

    return (
        <>
            <MainBox>
                <img id="start-img" src="https://images.unsplash.com/photo-1674071498147-ce8c7c59874c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="main-img" />
                <MainButton onClick={onClickBtn}>
                    테스트 시작하기
                </MainButton>

            </MainBox>
        </>
    )
}

export default Main;