import "./Card.css"
import React from 'react'

export default (props) => {
    const { title } = props
    const cardStyle = { 
        backgroundColor: props.color, 
        borderColor: props.color 
    } 

    return (
        <div className="Card" style={cardStyle}>
            <div className="title">{title}</div>
            <div className="content">{props.children}</div>
        </div>
    )
}