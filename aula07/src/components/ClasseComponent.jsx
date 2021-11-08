import React, { Component } from 'react'
export default class ClasseComponent extends Component {
   render(){
       
       return (
        <li>{this.props.nome} {this.props.estaNaLista ? "está" : "não está"} convidado para a festa</li>
       )
   }
}