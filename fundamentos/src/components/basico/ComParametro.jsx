import React from 'react'
export default function ComParametro (props) {
    const {title, subtitle, note} = props
    const status = note >= 7 ? 'Aprovado' : 'Recuperação'
    return (
        <div>
            <h2>{title}</h2>
            <p>
                <strong> {subtitle} </strong>
                <strong> {note} </strong>
                <strong> {status} </strong>  
           </p>
        </div>
    )
}