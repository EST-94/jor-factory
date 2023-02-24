import React from "react";
import { MainBox, MainButton } from "./styles";


const Main = () => {

    const onClickBtn = (e) => {
        window.location.href = '/test1';
    }

    return (
        <>
            <MainBox>
                <img id="start-img" src="/image/메인페이지.jpeg"
                    alt="main-img" />
                <MainButton onClick={onClickBtn}>
                    테스트 시작하기
                </MainButton>

            </MainBox>
        </>
    )
}

export default Main;