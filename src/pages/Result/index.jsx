import React from "react";
import { useParams } from 'react-router-dom';
import ShareButtons from "../../components/ShareButtons";
import {
    MainBox, Ad, Buttonkakao, Buttonstartpage
    , Buttons
} from "./styles";

const Result = () => {
    const { resultmbti } = useParams();

    const showStartPage = () => {
        window.location.href = '/main';
    }
    return (

        <MainBox>
            <Ad>광고삽입</Ad>
            <img src={`/image/${resultmbti}.jpg`}
                alt="result-image" />
            <div>{resultmbti}</div>
            <Buttons>
                <Buttonkakao>카카오톡으로 링크 공유</Buttonkakao>
                <Buttonstartpage onClick={showStartPage}>테스트 다시하기</Buttonstartpage>
                {/* 추후 공유 링크 & 아이콘 삽입 예정 */}
                <ShareButtons />
            </Buttons>
        </MainBox>

    );
}

export default Result;