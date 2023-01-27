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

export const MainButton = styled.button`
    width: 100%;
    background-color: rgb(241, 119, 139);
    border: none;
    font-size: 20px;
    height: 50px;
    border-radius: 10px 10px 10px 10px;
    cursor: pointer;
    margin-top: 3rem;
    color: white;
     

`