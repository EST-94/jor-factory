import styled from '@emotion/styled';

export const MainBox = styled.div`
    display:flex;
    flex-direction: column;
    height: auto;
    margin: 0 auto;
    width: 500px;
    max-width: 100%;
    & > img {
        vertical-align: middle;
        border-style: none;
        over-flow-clip-margin: content-box;
    }
`

export const Buttons = styled.div`
text-align: center;
margin-top:-40%;


`
export const Buttonstartpage = styled.button`
background-color:rgb(241, 119, 139);
border-radius: 10px 10px;
width:80%;
height:50px;
border: none;
color: white;
margin: 0 auto;
cursor:pointer;
font-family: 'IBM Plex Sans KR', sans-serif;

`

export const KakaoAdDisplay = styled.div`
    width: 100%;
    height: 100px;
`

