import React from "react";
import { MainBox, MainButton, KakaoAdDisplay } from "./styles";
import KakaoAd from "../../components/advertise/kakaoAdfit";


const Main = () => {

    const onClickBtn = (e) => {
        window.location.href = '/test';
    }

    return (
        <>
            <MainBox>
                <img id="start-img" src="/image/메인페이지.jpg"
                    alt="main-img" />
                <MainButton onClick={onClickBtn}>
                    내 정체 알아보기
                </MainButton>

            </MainBox>

            <KakaoAdDisplay>
                <KakaoAd/>
            </KakaoAdDisplay>
        </>
    )
}

export default Main;