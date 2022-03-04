import React, { Component } from 'react'
//import '../ModelClass.css'

class ModelClass extends Component {

    state = {
        nome: ''
    }
    //para mudar o estado de nome use: this.setState({nome: 'Novo Nome'})

    render() {
        return (
            <>
              {this.state.nome}
            </>
        )
    }
}

export default ModelClass