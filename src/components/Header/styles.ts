import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    /* height: 8.5rem; */
    padding: 1.2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    

    -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);

    img {
        /* margin-bottom: 5rem;
        margin-bottom: 0rem; */
        margin: auto;
        width: 5rem;
    }

    button {
        position: absolute;
        left:  5vw;
    }
`