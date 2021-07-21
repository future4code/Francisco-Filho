import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150?random=1'}
        />
         <Post
          nomeUsuario={'Jose'}
          fotoUsuario={'https://picsum.photos/200/300?random=1'}
          fotoPost={'https://picsum.photos/200/150?random=3'}
        />
         <Post
          nomeUsuario={'Pedro'}
          fotoUsuario={'https://picsum.photos/200/300?random=2'}
          fotoPost={'https://picsum.photos/200/150?random=4'}
        />
      </MainContainer>
    );
  }
}

export default App;
