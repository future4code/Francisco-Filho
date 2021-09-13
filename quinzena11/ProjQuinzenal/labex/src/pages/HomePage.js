import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const MainPageContainer  = styled.div` 
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
const MainPageBody = styled.div`
    

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export default function HomePage () {
    const history = useHistory()

    const goToListTripsPages = () => {
        history.push("/admin/trips/list")
    }
    
    
    
    
    
    return (

        
    



        <MainPageContainer>
        <Header/>
        <MainPageBody>
           <h1> MAIN PAGE</h1>
           <button onClick={goToListTripsPages}>ver Viagem</button>

        </MainPageBody>
        <Footer/>
        </MainPageContainer>
    )
};