import React from "react";
import {
    MainBox, Ad, Buttonkakao, Buttonstartpage
    , Buttons
} from "./styles";



const Result = () => {

    const showStartPage = () => {
        window.location.href = '/main';
    }
    return (

        <MainBox>
            <Ad>광고삽입</Ad>
            <img id="result-img1" src="https://images.unsplash.com/photo-1674071498147-ce8c7c59874c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="result-img" />
            <Buttons>
                <Buttonkakao>카카오톡으로 링크 공유</Buttonkakao>
                <Buttonstartpage onClick={showStartPage}>테스트 다시하기</Buttonstartpage>
                {/* 추후 공유 링크 & 아이콘 삽입 예정 */}
            </Buttons>
        </MainBox>

    );
}

export default Result;