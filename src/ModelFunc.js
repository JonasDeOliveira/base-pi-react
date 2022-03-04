import React, { useState } from 'react'
//import './ModelFunc.css'

function ModelFunc() {

    const [nome, setNome] = useState('')

    const modeloFuncao = () => {
         setNome('SeuNome')
    }

    return (
        <>
           <div>{nome}</div>
        </>
    )
}

export default ModelFunc