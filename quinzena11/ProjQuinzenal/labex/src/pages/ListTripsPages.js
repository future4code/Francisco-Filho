import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "styled-components";


const ListTripsPagesContainer  = styled.div`
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
const ListTripsPagesBody = styled.div`
   
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`




export const ListTripsPages = () => {
    return (
        <ListTripsPagesContainer>
        <Header/>
        <ListTripsPagesBody>
           <h1> Lista de viagem </h1>
           <button>ver Viagem</button>

        </ListTripsPagesBody>
        <Footer/>
        </ListTripsPagesContainer>
    )
}





