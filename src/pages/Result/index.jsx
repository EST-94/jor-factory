import React from "react";
import { useParams } from 'react-router-dom';
import ShareButtons from "../../components/ShareButtons";
import {
    MainBox, Buttonstartpage, Buttonkakao
    , Buttons
} from "./styles";

const Result = () => {
    const { resultmbti } = useParams();

    const showStartPage = () => {
        window.location.href = '/main';
    }
    return (

        <MainBox>
            <img src={`/image/${resultmbti}.jpg`}
                alt="result-image" />
            
            <Buttons>
                <Buttonstartpage onClick={showStartPage}>테스트 다시하기</Buttonstartpage>
                
                <ShareButtons />
            </Buttons>
        </MainBox>

    );
}

export default Result;