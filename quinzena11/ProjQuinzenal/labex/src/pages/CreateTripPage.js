import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "styled-components";


const CreateTripPageContainer  = styled.div`
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
const CreateTripPageBody = styled.div`
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`




export const CreateTripPage = () => {
    return (
        <CreateTripPageContainer>
        <Header/>
        <CreateTripPageBody>
           <h1> CriarViagem</h1>
           <button>ver Viagem</button>

        </CreateTripPageBody>
        <Footer/>
        </CreateTripPageContainer>
    )
}