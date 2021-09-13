import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "styled-components";


const TripDetailsPageContainer  = styled.div`
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
const TripDetailsPageBody = styled.div`
 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`




export const TripDetailsPage = () => {
    return (
        <TripDetailsPageContainer>
        <Header/>
        <TripDetailsPageBody>
           <h1> detalhes da viagem </h1>
           <button>ver Viagem</button>

        </TripDetailsPageBody>
        <Footer/>
        </TripDetailsPageContainer>
    )
}










/* import React from"react";


export const TripDetailsPage = () => {
    return (
        <div>

        <p> TripsDetailsPage </p>
        </div>
    )
} */