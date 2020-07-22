import React from 'react'

export default (props) => {
    const {min, max} = props
    const value = Math.floor(Math.random() * (max - min) ) + min

    return (
        <div>
            <h2>Valor Aleatório</h2>
            <p>
                <strong>Valor Mínimo: </strong> {min}
            </p>

            <p>
                <strong>Valor Máximo: </strong> {max}
            </p>

            <p>
                <strong>Número sorteado: </strong> {value}
            </p>
        </div>
       
    )
}    