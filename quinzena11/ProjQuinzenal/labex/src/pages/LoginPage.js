import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


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
    justify-content: space-between;
    align-items: center;

`




export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const onchangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const onChangePassword = (event) =>{
        setPassword(event.target.value);
    };

    const onSubmitLogin = () => {
        console.log(email, password)
        const body = {
            email: email,
            password: password,
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/francisco/login', body)
        .then((response) => {
                console.log('deu certo ', response.data.token);
                localStorage.setItem("token", response.data.token);
                history.push("/");
        }).catch((error) => {
            console.log(error.response)
        });
    };



    return (
        <LoginPageContainer>
        <Header/>
        <LoginPagesBody>
            
           <h1> Pagina de login </h1>
       
           
           <input
           placeholder="email"
           type="email"
           value={email}
           onChange={onchangeEmail} 
           />


           
           
           
           <input
            placeholder="senha"
            type="senha"
            value={password}
            onChange={onChangePassword}        
           />  
           <button onClick={onSubmitLogin}>Enviar</button>
           
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