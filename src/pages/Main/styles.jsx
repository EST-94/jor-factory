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

export const MainButton = styled.button`
    width: 50%;
    margin: 0 auto;
    background-color: #a7727d;
    border: none;
    font-size: 30px;
    height: 75px;
    border-radius: 10px 10px 10px 10px;
    cursor: pointer;
    margin-top: -50%;
    color: #f9f5e7;
    font-family: 'IBM Plex Sans KR', sans-serif;
    

`