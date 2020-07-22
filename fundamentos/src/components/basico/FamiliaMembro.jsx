import React from 'react'

export default (props) => {
    const {name, lastname} = props
    return ( 
        <div>
            {name} <strong>{lastname}</strong>
        </div>
    )    
}