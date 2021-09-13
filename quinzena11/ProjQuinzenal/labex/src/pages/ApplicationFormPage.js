import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "styled-components";


const ApplicationFormPageContainer  = styled.div`
 height: 100vh;  
  /* grid container settings */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    'header'
    'main'
    'footer'; 
 
`
const ApplicationFormPageBody = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`




export const ApplicationFormPage = () => {
    return (
        <ApplicationFormPageContainer>
        <Header/>
        <ApplicationFormPageBody>
           <h1> ApplicationFormPage</h1>
           <button>ver Viagem</button>

        </ApplicationFormPageBody>
        <Footer/>
        </ApplicationFormPageContainer>
    )
}







/* import React from"react";


export const ApplicationFormPage = () => {
    return (
        <div>

        <p> ApplicationFormPage </p>
        </div>
    )
} */