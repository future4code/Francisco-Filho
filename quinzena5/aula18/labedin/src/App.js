import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';



function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C5603AQGToIAniYv4mQ/profile-displayphoto-shrink_200_200/0/1517409044816?e=1631750400&v=beta&t=j2_2ZdL1d2oVYjZHCPJQg13QlI6nsCJzLdHho33CZ-k" 
          nome="Francisco Godoy" 
          descricao="Sou Formado em Geografia e me aventurando pelo mundo da programação"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>


      <div className="div-pequena" >
      
      <CardPequeno     
     texto="Centro Rj"
     />
          

     <CardPequeno        
     texto="falcaogodoy@gmail.com"
     />

    </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://www.bvrio.com/img/platform/nova/logo_bvrio.png" 
          nome="BVRio" 
          descricao="Analista de Economia Circular" 
        />
        
        <CardGrande 
          imagem="https://cce.puc-rio.br/sitecce/website/cce/files/images/logo_puc.png" 
          nome="Puc-Rio" 
          descricao="Consultor de Projetos Cartograficos" 
        />
      </div>

      <div className="page-section-container">

        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
   
      
   
   </div>
  );
}

export default App;
