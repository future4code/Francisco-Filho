import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [{
        id: Date.now(),
        texto: 'Texto da primeira tarefa',
        completa: false // Indica se a tarefa está completa (true ou false)
      },
      {
        id: Date.now(), // Explicação abaixo
        texto: 'Texto da segunda tarefa',
        completa: true // Indica se a tarefa está completa (true ou false)
      }],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate(prevProps, prevState) {
    console.log("DID UPDATE");
    console.log("ESTADO ANTERIOR", prevState);
    console.log("ESTADO ATUAL", this.state);

    if (prevState.id !== this.state.id) {
     
      localStorage.setItem("id", this.state.id);
    }

    if (prevState.texto !== this.state.texto) {
     
      localStorage.setItem("texto", this.state.texto);
    }

    if (prevState.completa !== this.state.completa) {
     
      localStorage.setItem("completa", this.state.completa);
    }
  };

  componentDidMount() {
    
    const idSalvo = localStorage.getItem("id");
    const textoSalvo = localStorage.getItem("texto");
    const completaSalvo = localStorage.getItem("completa");
    this.setState({
      id: idSalvo,
      texto: textoSalvo,
      completa: completaSalvo
    });
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), // Explicação abaixo
      texto: this.state.inputValue,
      completa: false // Indica se a tarefa está completa (true ou false)
    }
    const novaListaTarefa = [novaTarefa, ...this.state.tarefas]
      novaListaTarefa.push(novaTarefa)
    this.setState({tarefas: novaListaTarefa})


  }

  selectTarefa = (id) => {
    const novaListaTarefa = this.state.tarefas.map((tarefas) =>{ 
        if(id === tarefas.id) {
          const novoTexto = {
            ...tarefas,
            completa: !tarefas.completa
          }
          return novoTexto} else { 
            return tarefas}
        
    })
        this.setState({tarefas:novaListaTarefa })
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
