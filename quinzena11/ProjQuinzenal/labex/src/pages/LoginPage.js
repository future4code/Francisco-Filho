import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "styled-components";


const LoginPageContainer  = styled.div`
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
const LoginPagesBody = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`




export const LoginPage = () => {
    return (
        <LoginPageContainer>
        <Header/>
        <LoginPagesBody>
           <h1> Pagina de login </h1>
           <button>ver Viagem</button>

        </LoginPagesBody>
        <Footer/>
        </LoginPageContainer>
    )
}










// import React from"react";


// export const LoginPage = () => {
//     return (
//         <div>

//         <p> LoginPage </p>
//         </div>
//     )
// }