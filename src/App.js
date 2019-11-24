import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pessoa from './Pessoa/Pessoa'; 

class App extends Component {

  state = {  
    pessoas: [
     {id:'1', nome: 'Tom', idade: 21},
     {id:'2', nome: 'Julia', idade: 22},
     {id:'3', nome: 'William', idade: 23}
    ],
    outroState: 'algum outro valor',
    mostrarPessoas: false
  }  
  
  nomeManipuladorAlterado = (event, id) => {
    const pessoaIndex = this.state.pessoas.findIndex(p => {
      return p.id === id;
    });
    
    const pessoa = {
      ...this.state.pessoas[pessoaIndex]
    };

    // alternativa para a l de cima const pessoa = Object.assign({}, this.state.pessoas[pessoaIndex]);

    pessoa.nome = event.target.value;

    const pessoas = [...this.state.pessoas];
    pessoas[pessoaIndex] = pessoa;

    this.setState({pessoas: pessoas});
  }

  apagarManipuladorPessoa = (pessoaIndex) => {
    //const pessoas = this.state.pessoas.slice();
    const pessoas = [...this.state.pessoas];
    pessoas.splice(pessoaIndex, 1);
    this.setState({pessoas: pessoas});
  }

  toogleManipuladorPessoas = () => {
    const fazerMostrar = this.state.mostrarPessoas;
    this.setState({mostrarPessoas: !fazerMostrar});
  }

  render() {
    const estilo = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let pessoas = null;
    if (this.state.mostrarPessoas) {
      pessoas = (
        <div>
        {this.state.pessoas.map((pessoa, index) => {
          return <Pessoa 
          click={() => this.apagarManipuladorPessoa(index)}
          nome={pessoa.nome} 
          idade={pessoa.idade}
          key={pessoa.id}
          changed={(event) => this.nomeManipuladorAlterado(event, pessoa.id)}/>
        })}
        </div>
      );
      estilo.backgroundColor = 'red';
    }

    let classes = ['vermelho', 'negrito'].join(' '); 

    return (
      <div className="App">
        <h1>Olá, Sou um aplicativo React</h1>
        <p className={classes}>Isto está funcionando</p>
        <button 
        style={estilo}
        onClick={this.toogleManipuladorPessoas}>Alternancia de Pessoas
        </button> 
        {pessoas}
      </div> 
    ); 
  }
}

export default App;

