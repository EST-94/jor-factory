import styled from '@emotion/styled';

export const MainBox = styled.div`
    display:flex;
    flex-direction: column;
    height: 100vh;
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
    width: 60%;
    margin: 0 auto;
    background-color: #f69792;
    border: none;
    font-size: 1.5rem;
    height: 4rem;
    border-radius: 10px 10px 10px 10px;
    cursor: pointer;
    margin-top: -50%;
    color: #f9f5e7;
    font-family: 'IBM Plex Sans KR', sans-serif;
    

`