
import './App.css';
import Etapa1 from './pages/Etapa1';
import Etapa2 from './pages/Etapa2';
import Etapa3 from './pages/Etapa3';
import Final from './pages/Final';
import React from 'react';




class App extends React.Component {
state =  {
  etapa: 1,
   
}  

renderizaEtapa = () => {
  switch (this.state.etapa) {
    case 1: 
      return <Etapa1/>;
      break;

    case 2: 
      return <Etapa2/>;
      break;

    case 3: 
    return <Etapa3/>;
    break;
    case 4: 
    return <Final/>;
    break;
    default: return <Etapa1/>
    break;

}
}
irParaProximaEtapa = () =>{
   
  this.setState({etapa: this.state.etapa + 1});
}

  render () {
    return (
      <div>
        {this.renderizaEtapa()}
        <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
      </div>
    );
    }
  }



export default App;
