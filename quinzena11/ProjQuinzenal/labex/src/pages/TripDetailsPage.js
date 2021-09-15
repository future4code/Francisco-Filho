import React, { useEffect } from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router";
import { useProtectedPage } from "../Hooks/useProtectedPage";


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

    
    useProtectedPage()


    useEffect(() => {
        const token = localStorage.getItem("token")
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/francisco/trip/EbLG4OmoQVNUx0ufPVrs',{
            headers: {
                auth: token
            }
        })
        .then((response) =>{
            console.log(' certo' , response.data)
        }).catch((error) =>{
            console.log('error', error.response)
        })
    }, []);




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