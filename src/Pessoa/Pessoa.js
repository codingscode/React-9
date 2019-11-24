
import React from 'react';
import './Pessoa.css'

const pessoa = (props) => {
   return (
      <div className="Pessoa">
         <p onClick={props.click}>Eu sou {props.nome}, Eu sou uma Pessoa e tenho {props.idade} anos !</p>
         <p>{props.children}</p>
         <input type='text' onChange={props.changed} value={props.nome}></input>
      </div>
   )
}

export default pessoa;
