import styled from '@emotion/styled';

export const MainBox = styled.div`
    display:flex;
    flex-direction: column;
    height: auto;
    margin: 0 auto;
    width: 500px;
    margin-top: 5rem;
    margin-bottom: 5rem;
    max-width: 100%;
    & > img {
        vertical-align: middle;
        border-style: none;
        over-flow-clip-margin: content-box;
    }
`
export const Ad = styled.div`
background-color: gray;
width: 70%;
height: 70px;
margin: 0 auto;
margin-top: 5%;
margin-bottom: 7%;
text-align: center;
`

export const Buttons = styled.div`
text-align: center;
margin-top:5%;


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

`
export const Buttonkakao = styled.button`
background-color: #EEC50C;
border-radius: 10px 10px;
width:80%;
height:50px;
border: none;
color: white;
margin: 0 auto;
cursor:pointer;
margin-bottom: 5%;

`

