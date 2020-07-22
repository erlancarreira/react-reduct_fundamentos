import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho name="Beltrano" age={20} nerd={true} />
            <DiretaFilho name="Cicrano"  age={17} nerd={false} />
        </div>
    )
}