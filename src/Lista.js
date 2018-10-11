import React, { Component } from 'react';
import { observer } from 'mobx-react';

import VarListaData from './ListaData';

class Lista extends Component{

    enviarTarea(event){
        if ( event.which === 13){
            VarListaData.agregarTarea(event.target.value);
            event.target.value = '';
        }
    }

    render () {
        let listaDiv = [];
        let newListaDiv = [];
        const agergarDiv =  VarListaData.tareas.forEach(
            (value, index) => {
        listaDiv.push(<li key={index}> {value} </li>)
            }
        );


        return (
            <div> 
                <h2> Lista </h2>
                <input onKeyPress= {this.enviarTarea.bind(this)}/>
                <div>
                    <div>
                        <ul>
                            { listaDiv }
                        </ul>
                    </div>
                </div>   
            </div>
        )
    }
}



export default observer(Lista);