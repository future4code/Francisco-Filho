import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

/*  */


/* Styled  */
const HeaderContainer = styled.div`
    background: red;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 50px;
background: #54afbb;
box-shadow:  24px 24px 47px #2d5d63,
             -24px -24px 47px #7bffff;

`
const ButtonContainerHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    border: 1px solid black;

    
`

/* Styled */





export default function Header () {
    const history = useHistory()

    const goToAppliPage = () => {
        history.push("/trips/application")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }



    return (

        <HeaderContainer>
         
            <div>LOGGOOOO</div>
        <ButtonContainerHeader>
            <button onClick={goToAppliPage}>inscrever</button>
            <button onClick={goToLoginPage}>Admin</button>
        </ButtonContainerHeader>
        </HeaderContainer>
    )
};


