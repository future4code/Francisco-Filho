
import './App.css';
import React from 'react';
import Cadastro from './components/cadastro';
import Lista from './components/lista';

export default class App extends React.Component {
  state = {
    page: "Cadastro"
  };

  changePage = () => {
    if (this.state.page === "Cadastro") {
      this.setState({ page: "Lista" });
    } else if (this.state.page === "Lista") {
      this.setState({ page: "Cadastro" });
    }
  };

  renderPage = () => {
    switch (this.state.page) {
      case "Cadastro":
        return <Cadastro />;
      case "Lista":
        return <Lista />;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Labenusers</h1>
        <button onClick={this.changePage}>Trocar de página</button>
        {this.renderPage()}
      </div>
    );
  }}