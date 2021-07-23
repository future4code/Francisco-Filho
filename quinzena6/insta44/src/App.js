import { findByLabelText } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import './App.css';
import post from './components/Post/Post';
import './components/Post/Post.css'


const mainContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {




state={

post :[{
  nomeUsuario:'paulinha',
  fotoUsuario:'https://picsum.photos/50/50',
  fotoPost:'https://picsum.photos/200/150'
},{

  nomeUsuario:'joao',
  fotoUsuario:'https://picsum.photos/50/51',
  fotoPost:'https://picsum.photos/200/151'

}, {
  nomeUsuario:'amanda',
  fotoUsuario:'https://picsum.photos/50/52',
  fotoPost:'https://picsum.photos/200/152'

}]}

listaDepost = () => this.state.post.map((item)=>{
return <post>

          nomeUsuario = {item.nomeUsuario}
          fotoUsuario = {item.fotoUsuario}
          fotoPost = {item.fotoPost}

</post>;
})


  render() {
    return (
      <mainContainer>

        {this.listaDepost()}
      </mainContainer>
    );
  }
}

export default App;
