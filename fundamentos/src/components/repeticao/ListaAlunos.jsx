import React from 'react' 
import alunos from '../../data/alunos'

export default props => {
    const lis = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.name} -> {aluno.note}
            </li>               
        )
    })
    return ( 
        <div>
            <ul style={{listStyleType: 'decimal'}}>{lis}</ul>
        </div>
    )
}